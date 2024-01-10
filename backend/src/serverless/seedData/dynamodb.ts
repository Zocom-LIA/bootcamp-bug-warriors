import type { AWS } from "@serverless/typescript";

export const DynamoResources: AWS["resources"] = {
  Resources: {
    YumYumTable: {
      Type: "AWS::DynamoDB::Table",
      Properties: {
        TableName: process.env.YUM_YUM_TABLE,
        AttributeDefinitions: [
          {
            AttributeName: "PK",
            AttributeType: "S",
          },
          {
            AttributeName: "SK",
            AttributeType: "S",
          },
          {
            AttributeName: "customerId",
            AttributeType: "S",
          },
          {
            AttributeName: "orderTime",
            AttributeType: "S",
          },
          {
            AttributeName: "status",
            AttributeType: "S",
          },
          {
            AttributeName: "username",
            AttributeType: "S",
          },
        ],
        KeySchema: [
          {
            AttributeName: "PK",
            KeyType: "HASH",
          },
          {
            AttributeName: "SK",
            KeyType: "RANGE",
          },
        ],
        BillingMode: "PAY_PER_REQUEST",
        GlobalSecondaryIndexes: [
          {
            IndexName: "CustomerOrderIndex",
            KeySchema: [
              {
                AttributeName: "customerId",
                KeyType: "HASH",
              },
              {
                AttributeName: "orderTime",
                KeyType: "RANGE",
              },
            ],
            Projection: {
              ProjectionType: "ALL",
            },
          },
          {
            IndexName: "StatusIndex",
            KeySchema: [
              {
                AttributeName: "status",
                KeyType: "HASH",
              },
            ],
            Projection: {
              ProjectionType: "ALL",
            },
          },
          {
            IndexName: "UsernameIndex",
            KeySchema: [
              {
                AttributeName: "username",
                KeyType: "HASH",
              },
            ],
            Projection: {
              ProjectionType: "ALL",
            },
          },
        ],
      },
    },
    // ... other resource definitions if necessary
  },
};
