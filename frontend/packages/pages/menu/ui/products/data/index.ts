import { MenuList } from '@zocom/types';

export async function fetchMenu(): Promise<MenuList> {
  const API_URL: string = import.meta.env.VITE_API_URL;
  // const response = await fetch(
  //   'https://lryd33u6vk.execute-api.eu-north-1.amazonaws.com/'
  // );
  const response = await fetch(`${API_URL}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch menu');
  }
  return response.json();
}
