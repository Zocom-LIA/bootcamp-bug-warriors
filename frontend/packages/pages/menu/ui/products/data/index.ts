import { MenuList } from '@zocom/types';

export async function fetchMenu(): Promise<MenuList> {
  const response = await fetch(
    'https://corsproxy.io/?https%3A%2F%2Fzxzwng7le0.execute-api.eu-north-1.amazonaws.com/'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch menu');
  }
  return response.json();
}
