import middy from "@middy/core";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { createAdmin } from "./createAdmin";
import { AdminDetails } from "src/types";
import { HttpStatusCode } from "src/utils/httpCodes";
import { createStandardResponse } from "src/utils/responses";
import { validateAdminDetails } from "src/schema/createAdminSchema";

const baseHandler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  try {
    const adminDetails = JSON.parse(event.body) as AdminDetails;
    const response = await createAdmin(adminDetails);

    return createStandardResponse(HttpStatusCode.OK, response);
  } catch (error) {
    console.error("Error:", error.message);

    return createStandardResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, {
      message: error.message || "An unexpected error occurred",
    });
  }
};

export const handler = middy(baseHandler).use(validateAdminDetails());
