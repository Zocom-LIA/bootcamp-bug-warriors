import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { dynamoDbConfig } from "src/database/core/dbConfig";
import {
  AdminDetails,
  DatabaseResponse,
  QueryUserParams,
  PutUserParams,
} from "src/types";
import { hashSync } from "bcrypt-ts";
import { ErrorCreatingAdminAccount } from "src/utils/errors";
import { nanoid } from "nanoid";

const client = new DynamoDBClient(dynamoDbConfig);

export const createAdmin = async (
  adminDetails: AdminDetails
): Promise<DatabaseResponse> => {
  const queryUserParams: QueryUserParams = {
    TableName: process.env.YUM_YUM_TABLE,
    IndexName: "UsernameIndex",
    KeyConditionExpression: "username = :username",
    ExpressionAttributeValues: {
      ":username": { S: adminDetails.username },
    },
  };

  const userData = await client.send(new QueryCommand(queryUserParams));

  if (userData.Count > 0) {
    throw new Error("User already exists");
  }

  try {
    const hashedPassword: string = hashSync(adminDetails.password, 10);
    const adminId: string = nanoid();

    const putUserParams: PutUserParams = {
      TableName: process.env.YUM_YUM_TABLE,
      Item: {
        PK: { S: "Admin" },
        SK: { S: `Admin#${adminId}` },
        username: { S: adminDetails.username },
        password: { S: hashedPassword },
        email: { S: adminDetails.email },
      },
    };

    await client.send(new PutItemCommand(putUserParams));

    return { message: "Admin created successfully" };
  } catch (error) {
    console.error("Error hashing password:", error);
    throw ErrorCreatingAdminAccount();
  }
};
