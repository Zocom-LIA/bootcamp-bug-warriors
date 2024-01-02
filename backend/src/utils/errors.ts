import createHttpError, { HttpError } from "http-errors";
import { HttpStatusCode } from "./httpCodes";

/* Unauthorized access due to invalid application key. */
const unauthorizedAccessError = (): HttpError => {
  return createHttpError(
    HttpStatusCode.UNAUTHORIZED,
    "You are not authorized to access this resource!",
    { type: "NotAuthorized" }
  );
};

/* Error when the total sum of an order does not match the expected prices. */
const priceMismatchError = (): HttpError => {
  return createHttpError(
    HttpStatusCode.BAD_REQUEST,
    "Total sum of order does not match prices!",
    { type: "BadRequest" }
  );
};

const NonExistingOrder = (orderId: string): HttpError => {
  return createHttpError(
    HttpStatusCode.NOT_FOUND,
    `Order with ID ${orderId} not found`,
    { type: "NotFound" }
  );
};

export { unauthorizedAccessError, priceMismatchError, NonExistingOrder };
