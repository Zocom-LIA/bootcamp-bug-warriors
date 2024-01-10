import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { getKitchenOrders } from "./getKitchenOrders";
import { createStandardResponse } from "src/utils/responses";
import { HttpStatusCode } from "src/utils/httpCodes";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  try {
    const apiKey = event.headers["x-api-key"];

    if (apiKey === process.env.API_KEY) {
      const orders = await getKitchenOrders();
      return createStandardResponse(HttpStatusCode.OK, orders);
    } else {
      return createStandardResponse(HttpStatusCode.UNAUTHORIZED, {
        message: "Unauthorized",
      });
    }
  } catch (error) {
    console.error("Error retrieving kitchen orders:", error);
    return createStandardResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, {
      message: "Error retrieving kitchen orders.",
    });
  }
};
