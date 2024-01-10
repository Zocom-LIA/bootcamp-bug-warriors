import {
  AttributeValue,
  DynamoDBClient,
  PutItemCommand,
} from '@aws-sdk/client-dynamodb';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { nanoid } from 'nanoid';
import { dynamoDbConfig } from 'src/database/core/dbConfig';
import {
  DipItem,
  DynamoDBOrder,
  IDynamoDBOrderItem,
  OrderData,
  OrderStatus,
  WontonItem,
  ClientOrder,
  ClientItems,
} from 'src/types';
import { HttpStatusCode } from 'src/utils/httpCodes';
import { createStandardResponse } from 'src/utils/responses';
import { calculateETA } from './calculateETA';

const client = new DynamoDBClient(dynamoDbConfig);

export const postOrder = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  try {
    const orderData: OrderData = JSON.parse(event.body);
    const orderId = nanoid();
    const customerId = nanoid();
    const formatDate = (date: Date) => {
      const pad = (num: number) => num.toString().padStart(2, '0');
      return (
        `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
          date.getDate()
        )} ` +
        `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
          date.getSeconds()
        )}`
      );
    };

    let totalPrice = 0;
    const itemsForOrder: AttributeValue[] = [];
    const clientItems: ClientItems[] = [];
    const etaItems: IDynamoDBOrderItem[] = [];
    // Handle as a WontonItem
    if (orderData.wonton) {
      for (const item of orderData.wonton) {
        const wontonItem: WontonItem = item as WontonItem;
        const itemPrice = wontonItem.price * wontonItem.quantity;
        totalPrice += itemPrice;

        const dynamoDBOrderItem: IDynamoDBOrderItem = {
          name: { S: wontonItem.name },
          desc: { S: wontonItem.desc },
          price: { N: wontonItem.price.toString() },
          quantity: { N: wontonItem.quantity.toString() },
          ingredients: { L: wontonItem.ingredients.map((ing) => ({ S: ing })) },
          preparationTime: { N: wontonItem.preparationTime.toString() },
        };

        const clientOrderItem: ClientItems = {
          name: wontonItem.name,
          desc: wontonItem.desc,
          price: wontonItem.price.toString(),
          quantity: wontonItem.quantity.toString(),
          ingredients: wontonItem.ingredients,
          preparationTime: wontonItem.preparationTime.toString(),
        };

        clientItems.push(clientOrderItem);
        itemsForOrder.push({ M: dynamoDBOrderItem });
        etaItems.push(dynamoDBOrderItem);
      }
    }

    // Handle as a DipItem
    if (orderData.dip) {
      for (const item of orderData.dip) {
        const dipItem: DipItem = item as DipItem;
        const itemPrice = dipItem.price * dipItem.quantity;
        totalPrice += itemPrice;

        const dynamoDBOrderItem: IDynamoDBOrderItem = {
          name: { S: dipItem.name },
          desc: { S: dipItem.desc },
          price: { N: dipItem.price.toString() },
          quantity: { N: dipItem.quantity.toString() },
        };

        const clientOrderItem: ClientItems = {
          name: dipItem.name,
          desc: dipItem.desc,
          price: dipItem.price.toString(),
          quantity: dipItem.quantity.toString(),
        };
        clientItems.push(clientOrderItem);
        itemsForOrder.push({ M: dynamoDBOrderItem });
      }
    }

    const eta = await calculateETA(etaItems);
    const orderItem: DynamoDBOrder = {
      PK: { S: 'Order' },
      SK: { S: `Order#${orderId}` },
      customerId: { S: `Customer#${customerId}` },
      status: { S: OrderStatus.Pending }, // Default status
      items: { L: itemsForOrder },
      orderTime: { S: formatDate(new Date()) },
      eta: { S: eta },
      totalPrice: { N: totalPrice.toString() },
    };

    const clientOrderItem: ClientOrder = {
      orderId: orderId,
      customerId: customerId,
      status: OrderStatus.Pending,
      items: clientItems,
      orderTime: formatDate(new Date()),
      eta: eta,
      totalPrice: totalPrice.toString(),
    };

    await client.send(
      new PutItemCommand({
        TableName: process.env.YUM_YUM_TABLE,
        Item: orderItem,
      })
    );

    return createStandardResponse(HttpStatusCode.OK, {
      message: 'Order created successfully',
      orderItem: clientOrderItem,
    });
  } catch (error) {
    console.error('Error posting order:', error);
    return createStandardResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, {
      message: 'Error posting order',
    });
  }
};
