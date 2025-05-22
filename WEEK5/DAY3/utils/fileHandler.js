import { readFile, writeFile } from 'fs/promises';
const filePath = new URL('../data/clients.json', import.meta.url);

export const readClients = async () => {
  const data = await readFile(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeClients = async (clients) => {
  await writeFile(filePath, JSON.stringify(clients, null, 2));
};
