import { OrderItem, OrderStatus } from '@zocom/types';

export async function changeOrderStatus(
  orderId: string,
  orderStatus: OrderStatus
): Promise<string> {
  const API_URL: string = import.meta.env.VITE_API_URL;
  const orderToFetch = orderId;
  const orderStatusToChange = orderStatus;

  const response = await fetch(`${API_URL}/orders/${orderToFetch}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_API_KEY,
    },
    body: JSON.stringify({ newStatus: `${orderStatusToChange}` }),
  });
  if (!response.ok) {
    throw new Error(`Failed to change order with id ${orderId}`);
  }
  return response.json();
}

export async function fetchOrders(): Promise<OrderItem[]> {
  const API_URL: string = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}/kitchen`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_API_KEY,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return response.json();
}
