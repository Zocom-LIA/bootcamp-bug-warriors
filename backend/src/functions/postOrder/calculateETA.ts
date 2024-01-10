import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';
import { IDynamoDBOrderItem, OrderStatus, QueryParams } from 'src/types';
import { dynamoDbConfig } from 'src/database/core/dbConfig';

const client = new DynamoDBClient(dynamoDbConfig);

export const calculateCurrentKitchenLoad = async (): Promise<number> => {
  try {
    let totalLoadTime = 0;
    const currentTime = new Date().getTime();

    const params: QueryParams = {
      TableName: process.env.YUM_YUM_TABLE,
      IndexName: "StatusIndex",
      KeyConditionExpression: "#status = :statusVal",
      ExpressionAttributeNames: {
        '#status': 'status',
        '#items': 'items',
        '#orderTime': 'orderTime',
      },
      ExpressionAttributeValues: {
        ':statusVal': { S: OrderStatus.Pending },
      },
      ProjectionExpression: '#items, #orderTime, #status',
    };

    const data = await client.send(new QueryCommand(params));

    if (data.Items) {
      data.Items.forEach((order) => {
        console.log('data.Items', data.Items);
        const items = order.items;
        console.log('items', items);
        const orderTimeAttr = order.orderTime;
        const orderStatusAttr = order.status;

        console.log(
          'orderTimeAttr',
          orderTimeAttr,
          'orderStatusAttr',
          orderStatusAttr
        );
        if (
          orderTimeAttr &&
          orderTimeAttr.S &&
          orderStatusAttr &&
          orderStatusAttr.S === OrderStatus.Pending
        ) {
          const orderPlacedTime = new Date(orderTimeAttr.S).getTime();
          const timeElapsed = (currentTime - orderPlacedTime) / 60000;
          let orderTotalPrepTime = 0;
          if (items && items.L) {
            items.L.forEach((attributeValue) => {
              if (attributeValue.M) {
                const prepTimeAttr = attributeValue.M.preparationTime;
                const quantityAttr = attributeValue.M.quantity;
                if (
                  prepTimeAttr &&
                  prepTimeAttr.N &&
                  quantityAttr &&
                  quantityAttr.N
                ) {
                  orderTotalPrepTime +=
                    Number(prepTimeAttr.N) * Number(quantityAttr.N);
                }
              }
            });
          }
          // Calculate remaining time for this order
          const remainingTime = Math.max(0, orderTotalPrepTime - timeElapsed);
          totalLoadTime += remainingTime;
        }
      });
    }

    console.log(totalLoadTime);
    return totalLoadTime;
  } catch (error) {
    console.error('Error calculating kitchen load:', error);
    return 0;
  }
};

export const calculateETA = async (
  items: IDynamoDBOrderItem[]
): Promise<string> => {
  let totalPreparationTime = 0;
  for (const item of items) {
    if (item.preparationTime && item.quantity) {
      totalPreparationTime +=
        Number(item.preparationTime.N) * Number(item.quantity.N);
    }
  }
  const currentKitchenLoad = await calculateCurrentKitchenLoad();
  const totalETA = totalPreparationTime + currentKitchenLoad;
  const minutes = Math.floor(totalETA);
  // const seconds = Math.floor((totalETA - minutes) * 60);

  return `${minutes}`;
};
