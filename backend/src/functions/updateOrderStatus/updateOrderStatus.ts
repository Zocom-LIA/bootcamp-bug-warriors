import {
  UpdateItemCommand,
  DynamoDBClient,
  GetItemCommand,
} from "@aws-sdk/client-dynamodb";
import { dynamoDbConfig } from "src/database/core/dbConfig";
import { OrderStatus, UpdateOrderParams } from "src/types";
import { NonExistingOrder } from "src/utils/errors";

const client = new DynamoDBClient(dynamoDbConfig);
export const updateOrderStatus = async (
  orderId: string,
  newStatus: OrderStatus
): Promise<void> => {
  try {
    const getOrderParams = {
      TableName: "Yum-Yum-table",
      Key: {
        PK: { S: "Order" },
        SK: { S: `Order#${orderId}` },
      },
    };
    const orderData = await client.send(new GetItemCommand(getOrderParams));
    if (!orderData.Item) {
      throw NonExistingOrder(orderId);
    }

    const updateParams: UpdateOrderParams = {
      TableName: "Yum-Yum-table",
      Key: {
        PK: { S: "Order" },
        SK: { S: `Order#${orderId}` },
      },
      UpdateExpression: "set #status = :s",
      ExpressionAttributeNames: {
        "#status": "status",
      },
      ExpressionAttributeValues: {
        ":s": { S: newStatus },
      },
    };

    await client.send(new UpdateItemCommand(updateParams));
    console.log("Order status updated successfully");
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};
