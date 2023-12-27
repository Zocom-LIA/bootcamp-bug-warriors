/* Menu types */

export interface IWonton {
  name: string;
  desc: string;
  price: number;
  ingredients?: string[];
  preparationTime?: number;
}

export interface IDip {
  name: string;
  desc: string;
  price: number;
}

export interface IMenu {
  wonton: IWonton[];
  dip: IDip[];
}

/* Order Items */

export interface WontonItem {
  name: string;
  desc: string;
  price: number;
  quantity: number;
  ingredients?: string[];
  preparationTime?: number;
}

export interface DipItem {
  name: string;
  desc: string;
  price: number;
  quantity: number;
}

export interface OrderData {
  wonton?: WontonItem[];
  dip?: DipItem[];
}

/* DynamoDB items */
import { AttributeValue } from "@aws-sdk/client-dynamodb";

export type DynamoDBItem = {
  PK: AttributeValue;
  SK: AttributeValue;
  name: AttributeValue;
  desc: AttributeValue;
  ingredients?: AttributeValue;
  price: AttributeValue;
  preparationTime?: AttributeValue;
};

export type NestedDynamoDBItem = {
  name?: { S: string };
  desc?: { S: string };
  price?: { N: string };
  quantity?: { N: string };
  preparationTime?: { N: string };
  ingredients?: { L: { S: string }[] };
};

export interface IDynamoDBOrderItem {
  [key: string]: AttributeValue;
  name: { S: string };
  desc: { S: string };
  ingredients?: { L: { S: string }[] };
  price: { N: string };
  preparationTime?: { N: string };
  quantity: { N: string };
}

export type DynamoDBOrder = {
  PK: { S: string };
  SK: { S: string };
  customerId: { S: string };
  status: { S: OrderStatus };
  eta: { S: string };
  items: AttributeValue;
  orderTime: { S: string };
  totalPrice: { N: string };
};

/* Validation and Schema types */

import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";

interface ValidationErrorDetail {
  message: string;
  path: (string | number)[];
  context: Record<string, unknown>;
}

export interface ValidationErrorResponse {
  status: string;
  errors: ValidationErrorDetail[];
}

export type CustomMiddleware = middy.MiddlewareObj<APIGatewayProxyEventV2>;

/* Params types */

export enum OrderStatus {
  Pending = "Pending",
  Preparing = "Preparing",
  ReadyForDelivery = "ReadyForDelivery",
  Delivered = "Delivered",
}

export type UpdateOrderParams = {
  TableName: string;
  Key: {
    PK: { S: string };
    SK: { S: string };
  };
  UpdateExpression: string;
  ExpressionAttributeNames: {
    "#status": string;
  };
  ExpressionAttributeValues: {
    ":s": { S: OrderStatus };
  };
};
