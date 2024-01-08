import Joi from "joi";
import {
  CustomMiddleware,
  OrderStatus,
  ValidationErrorResponse,
} from "src/types";
import { HttpStatusCode } from "src/utils/httpCodes";
import { createStandardResponse } from "src/utils/responses";

const updateOrderStatusSchema = Joi.object({
  newStatus: Joi.string()
    .valid(...Object.values(OrderStatus))
    .required(),
});

export const validateUpdateOrderStatus = (): CustomMiddleware => {
  return {
    before: async (handler) => {
      try {
        await updateOrderStatusSchema.validateAsync(
          JSON.parse(handler.event.body)
        );
      } catch (error) {
        if (error instanceof Joi.ValidationError) {
          const errorResponse: ValidationErrorResponse = {
            status: "Validation Error",
            errors: error.details.map((detail) => ({
              message: detail.message,
              path: detail.path,
              context: detail.context || {},
            })),
          };

          handler.response = createStandardResponse(
            HttpStatusCode.BAD_REQUEST,
            errorResponse
          );
          return handler.response;
        } else {
          handler.response = createStandardResponse(
            HttpStatusCode.INTERNAL_SERVER_ERROR,
            { message: "An unexpected error occurred" }
          );
          return handler.response;
        }
      }
    },
  };
};
