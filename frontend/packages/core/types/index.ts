export enum SizeTypes {
  "REGULAR" = "regular",
  "SMALL" = "small",
  "MEDIUM" = "medium",
  "LARGE" = "large",
}

export enum StyleTypes {
  "DEFAULT" = "default",
  "DARK" = "dark",
  "LIGHT" = "light",
}

export interface BaseProduct {
  name: string,
  desc: string,
  price: number
}

interface Wonton extends BaseProduct {
  ingredients: string[];
}

interface Dip extends BaseProduct {

}

export type Product = Wonton | Dip;