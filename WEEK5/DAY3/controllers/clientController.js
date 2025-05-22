import * as clientService from '../services/clientService.js';
import { validateClient } from '../utils/validateClient.js';

export const getClients = async (req, res) => {
  const { name } = req.query;
  const clients = await clientService.getAllClients(name);
  res.json(clients);
};

export const getClient = async (req, res) => {
  const client = await clientService.getClientById(req.params.id);
  if (!client) return res.status(404).json({ error: 'Client not found' });
  res.json(client);
};

export const addClient = async (req, res) => {
  const error = validateClient(req.body);
  if (error) return res.status(400).json({ error });
  const client = await clientService.createClient(req.body);
  res.status(201).json(client);
};

export const updateClient = async (req, res) => {
  const error = validateClient(req.body);
  if (error) return res.status(400).json({ error });
  const updated = await clientService.updateClient(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Client not found' });
  res.json(updated);
};

export const removeClient = async (req, res) => {
  const success = await clientService.deleteClient(req.params.id);
  if (!success) return res.status(404).json({ error: 'Client not found' });
  res.status(204).send();
};
