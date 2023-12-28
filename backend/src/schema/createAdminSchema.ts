import Joi from "joi";
import { CustomMiddleware, ValidationErrorResponse } from "src/types";
import { HttpStatusCode } from "src/utils/httpCodes";
import { createStandardResponse } from "src/utils/responses";

export const adminDetailsSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const validateAdminDetails = (): CustomMiddleware => {
  return {
    before: async (handler) => {
      try {
        await adminDetailsSchema.validateAsync(JSON.parse(handler.event.body));
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
