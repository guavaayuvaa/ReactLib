import { v4 as uuidv4 } from 'uuid';
import { readClients, writeClients } from '../utils/fileHandler.js';

export const getAllClients = async (name) => {
  const clients = await readClients();
  return name ? clients.filter(c => c.name.toLowerCase().includes(name.toLowerCase())) : clients;
};

export const getClientById = async (id) => {
  const clients = await readClients();
  return clients.find(c => c.id === id);
};

export const createClient = async (client) => {
  const clients = await readClients();
  const newClient = { id: uuidv4(), ...client };
  clients.push(newClient);
  await writeClients(clients);
  return newClient;
};

export const updateClient = async (id, data) => {
  const clients = await readClients();
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return null;
  clients[index] = { ...clients[index], ...data };
  await writeClients(clients);
  return clients[index];
};

export const deleteClient = async (id) => {
  const clients = await readClients();
  const filtered = clients.filter(c => c.id !== id);
  if (clients.length === filtered.length) return false;
  await writeClients(filtered);
  return true;
};
