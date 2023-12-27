import { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const dynamoDbConfig: DynamoDBClientConfig = {
  region: process.env.AWS_REGION,
};
