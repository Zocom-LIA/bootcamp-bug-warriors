import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { dynamoDbConfig } from "../core/dbConfig";
import { IWonton, DynamoDBItem } from "src/types";
import menu from "../../../menu.json";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env);

const client = new DynamoDBClient(dynamoDbConfig);

function calculatePreparationTime(wonton: IWonton): number {
  const timePerIngredient = 0.3; // 0.3 minutes per ingredient
  const totalPreparationTime =
    Math.round(wonton.ingredients.length * timePerIngredient * 10) / 10;

  return totalPreparationTime;
}

async function populateMenu() {
  for (const wonton of menu.wontons) {
    const preparationTime = calculatePreparationTime(wonton);
    const dynamoDBWontonItem: DynamoDBItem = {
      PK: { S: "MenuItem" },
      SK: { S: `Wonton#${wonton.name}` },
      name: { S: wonton.name },
      desc: { S: wonton.desc },
      ingredients: { L: wonton.ingredients.map((ing) => ({ S: ing })) },
      price: { N: wonton.price.toString() },
      preparationTime: { N: preparationTime.toString() },
    };

    console.log(process.env.YUM_YUM_TABLE);

    await client.send(
      new PutItemCommand({
        TableName: process.env.YUM_YUM_TABLE,
        Item: dynamoDBWontonItem,
      })
    );
  }

  for (const dip of menu.dip) {
    const dynamoDBDipItem: DynamoDBItem = {
      PK: { S: "MenuItem" },
      SK: { S: `Dip#${dip.name}` },
      name: { S: dip.name },
      desc: { S: dip.desc },
      price: { N: dip.price.toString() },
    };

    await client.send(
      new PutItemCommand({
        TableName: process.env.YUM_YUM_TABLE,
        Item: dynamoDBDipItem,
      })
    );
  }

  console.log("Menu items have been populated into DynamoDB.");
}

populateMenu().catch((error) => {
  console.error("An error occurred while populating the menu:", error);
});
