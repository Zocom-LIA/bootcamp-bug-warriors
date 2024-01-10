import { MenuList } from '@zocom/types';

export async function fetchMenu(): Promise<MenuList> {
  const response = await fetch(
    'https://lryd33u6vk.execute-api.eu-north-1.amazonaws.com/'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch menu');
  }
  return response.json();
}
