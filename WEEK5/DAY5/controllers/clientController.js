const ClientService = require('../services/ClientService');

exports.getClients = async (req, res) => {
  const { userId } = req.params;
  const clients = await ClientService.getAll(userId);
  res.json(clients);
};

exports.addClient = async (req, res) => {
  const { userId } = req.params;
  const client = await ClientService.add(userId, req.body);
  res.status(201).json(client);
};

// You can add updateClient and deleteClient similarly
