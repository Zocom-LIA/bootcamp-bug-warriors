export async function getOrderByOrderNr(): Promise<Order> {
  const order = await fetch('');
  if (!order.ok) {
    throw new Error('Order not found');
  }
  return order.json();
}
