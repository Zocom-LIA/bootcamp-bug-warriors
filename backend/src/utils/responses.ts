import { HttpStatusCode } from "./httpCodes";

const createStandardResponse = <T>(
  statusCode: HttpStatusCode,
  responseBody: T
) => {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(responseBody),
  };
};

const createValidationErrorResponse = (errorMessage: string) => {
  return createStandardResponse(HttpStatusCode.BAD_REQUEST, {
    message: errorMessage,
  });
};

export { createStandardResponse, createValidationErrorResponse };
