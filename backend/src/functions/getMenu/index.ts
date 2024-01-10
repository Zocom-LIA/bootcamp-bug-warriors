import { APIGatewayProxyResultV2 } from "aws-lambda";
import { getMenu } from "./getMenu";
import { createStandardResponse } from "src/utils/responses";
import { HttpStatusCode } from "src/utils/httpCodes";

export const handler = async (): Promise<APIGatewayProxyResultV2> => {
  try {
    const menu = await getMenu();
    return createStandardResponse(HttpStatusCode.OK, menu);
  } catch (error) {
    console.error("Error retrieving the menu:", error);
    createStandardResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, {
      message: "Error retrieving the menu",
    });
  }
};
