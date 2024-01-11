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

export function calculateElapsedTime(orderTime: string): string {
  const orderDate = new Date(orderTime);
  const now = new Date();

  const elapsedMs = now.getTime() - orderDate.getTime();

  const minutes = Math.floor((elapsedMs / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedMs / 1000) % 60);

  return ` ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}
