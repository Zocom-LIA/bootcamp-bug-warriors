import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import { dynamoDbConfig } from "src/database/core/dbConfig";
import { DynamoDBOrder } from "src/types";

const dynamoDBClient = new DynamoDBClient(dynamoDbConfig);

export const getKitchenOrders = async (): Promise<any> => {
  try {
    const params = {
      TableName: process.env.YUM_YUM_TABLE,
      KeyConditionExpression: "PK = :pkValue",
      ExpressionAttributeValues: {
        ":pkValue": { S: "Order" },
      },
    };

    const queryCommand = new QueryCommand(params);
    const result = await dynamoDBClient.send(queryCommand);

    const orders = result.Items?.map((item: DynamoDBOrder) => ({
      eta: item.eta.S,
      totalPrice: parseInt(item.totalPrice.N),
      status: item.status.S,
      SK: item.SK.S.slice(5),
      items: item.items.L.map((subItem: any) => ({
        name: subItem.M.name.S,
        quantity: parseInt(subItem.M.quantity.N),
        price: parseInt(subItem.M.price.N),
      })),
    }));

    return orders;
  } catch (error) {
    console.error("Error fetching kitchen orders", error);
    throw error;
  }
};
