import { MenuList } from '@zocom/types';

type clientOrder = {
  orderId: string;
  customerId: string;
  status: string;
  eta: string;
  items: MenuList;
  orderTime: string;
  totalPrice: number;
};

interface Response {
  message: string;
  orderItem: clientOrder;
}

export async function sendOrder(
  url: string,
  order: MenuList
): Promise<Response> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order), //put data here
  });

  if (response.status === 500) {
    //Error
  }

  return await response.json();
}
