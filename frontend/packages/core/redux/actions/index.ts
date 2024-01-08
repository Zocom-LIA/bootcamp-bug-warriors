import { WontonItem, DipItem } from "@zocom/types";

export const addItem = (
  item: WontonItem | DipItem,
  itemType: "wonton" | "dip"
) => ({
  type: "ADD_TO_CART",
  payload: { item, itemType },
});

export const decrease = (
  item: WontonItem | DipItem,
  itemType: "wonton" | "dip"
) => ({
  type: "DECREASE",
  payload: { item, itemType },
});

export const increase = (
  item: WontonItem | DipItem,
  itemType: "wonton" | "dip"
) => ({
  type: "INCREASE",
  payload: { item, itemType },
});
