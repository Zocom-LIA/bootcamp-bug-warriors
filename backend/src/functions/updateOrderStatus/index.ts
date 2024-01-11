import middy from "@middy/core";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { updateOrderStatus } from "./updateOrderStatus";
import { OrderStatus } from "src/types";
import { createStandardResponse } from "src/utils/responses";
import { HttpStatusCode } from "src/utils/httpCodes";
import { validateUpdateOrderStatus } from "src/schema/updateOrderStatusSchema";

const baseHandler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  try {
    const apiKey = event.headers["x-api-key"];

    if (apiKey !== process.env.API_KEY) {
      return createStandardResponse(HttpStatusCode.UNAUTHORIZED, {
        message: "Unauthorized",
      });
    }

    const orderId = event.pathParameters?.orderId;
    const { newStatus } = JSON.parse(event.body);

    if (!Object.values(OrderStatus).includes(newStatus)) {
      return createStandardResponse(HttpStatusCode.BAD_REQUEST, {
        message: "Invalid order status",
      });
    }

    await updateOrderStatus(orderId, newStatus);

    return createStandardResponse(HttpStatusCode.OK, {
      message: "Order status updated successfully",
    });
  } catch (error) {
    console.error("Error in Lambda handler:", error);

    if (error.type === "NotFound") {
      return createStandardResponse(HttpStatusCode.NOT_FOUND, {
        message: `Order not found`,
      });
    }
    return createStandardResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, {
      message: "Error updating order status",
    });
  }
};

export const handler = middy(baseHandler).use(validateUpdateOrderStatus());
