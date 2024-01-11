export enum SizeTypes {
  'REGULAR' = 'regular',
  'SMALL' = 'small',
  'MEDIUM' = 'medium',
  'LARGE' = 'large',
}

export enum StyleTypes {
  'DEFAULT' = 'default',
  'DARK' = 'dark',
  'LIGHT' = 'light',
}

export interface BaseProduct {
  name: string;
  desc: string;
  price: number;
  quantity: number;
}

interface Wonton extends BaseProduct {
  ingredients: string[];
  preperationTime: number;
}

interface Dip extends BaseProduct {}

export type Product = Wonton | Dip;

export interface WontonItem {
  name: string;
  desc: string;
  price: number;
  quantity: number;
  ingredients?: string[];
  preparationTime?: number;
}

export interface DipItem {
  //index: number;
  name: string;
  desc: string;
  price: number;
  quantity: number;
}

export interface MenuList {
  wonton: WontonItem[];
  dip: DipItem[];
}

export interface ItemInOrder {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderItem {
  eta: number;
  totalPrice: number;
  status: string;
  SK: string;
  orderTime: number;
  items: ItemInOrder[];
}

export enum OrderStatus {
  Pending = 'Pending',
  Preparing = 'Preparing',
  ReadyForDelivery = 'ReadyForDelivery',
  Delivered = 'Delivered',
}
