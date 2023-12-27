import Joi from "joi";
import { CustomMiddleware, ValidationErrorResponse } from "src/types";
import { HttpStatusCode } from "src/utils/httpCodes";
import { createStandardResponse } from "src/utils/responses";

const wontonSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().greater(0).required(),
  quantity: Joi.number().integer().greater(0).required(),
  ingredients: Joi.array().items(Joi.string()).required(),
  preparationTime: Joi.number().greater(0).required(),
});

const dipSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().greater(0).required(),
  quantity: Joi.number().integer().greater(0).required(),
});

export const orderSchema = Joi.object({
  wonton: Joi.array().items(wontonSchema).optional(),
  dip: Joi.array().items(dipSchema).optional(),
});

export const validateOrderData: CustomMiddleware = {
  before: async (handler) => {
    try {
      const parsedBody = JSON.parse(handler.event.body);
      await orderSchema.validateAsync(parsedBody);
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
          {
            message: "An unexpected error occurred",
          }
        );
        return handler.response;
      }
    }
  },
};
