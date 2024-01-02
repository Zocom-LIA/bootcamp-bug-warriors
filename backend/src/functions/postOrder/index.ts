import middy from "@middy/core";
import { postOrder } from "./postOrder";
import { validateOrderData } from "src/schema/orderSchema";

export const handler = middy(postOrder).use(validateOrderData);
