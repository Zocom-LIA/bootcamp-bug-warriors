import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { dynamoDbConfig } from "src/database/core/dbConfig";
import { IDip, IMenu, IWonton, DynamoDBItem } from "src/types";

const client = new DynamoDBClient(dynamoDbConfig);

export const getMenu = async (): Promise<IMenu> => {
  const command = new ScanCommand({
    TableName: process.env.YUM_YUM_TABLE,
  });

  try {
    const data = await client.send(command);
    const items = (data.Items as DynamoDBItem[]) || [];

    const menu: IMenu = {
      wonton: items
        .filter((item) => item.SK.S.startsWith("Wonton#"))
        .map(mapDynamoDBItemToWonton),
      dip: items
        .filter((item) => item.SK.S.startsWith("Dip#"))
        .map(mapDynamoDBItemToDip),
    };
    return menu;
  } catch (error) {
    console.error("Error retrieving items:", error);
    throw error;
  }
};

const mapDynamoDBItemToWonton = (item: DynamoDBItem): IWonton => ({
  name: item.name.S,
  desc: item.desc.S,
  ingredients: item.ingredients.L.map((ing) => ing.S),
  price: parseInt(item.price.N),
  preparationTime: parseInt(item.preparationTime.N),
});

const mapDynamoDBItemToDip = (item: DynamoDBItem): IDip => ({
  name: item.name.S,
  desc: item.desc.S,
  price: parseInt(item.price.N),
});
