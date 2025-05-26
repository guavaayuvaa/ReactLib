const clients = []; 
const CustomError = require('../utils/CustomError');

exports.createClient = (req, res, next) => {
  const { email, name } = req.body;

  if (!email || !name) return next(new CustomError('Missing client data', 400));

  const exists = clients.find(c => c.email === email);
  if (exists) return next(new CustomError('Duplicate email', 409));

  const client = { id: Date.now(), email, name };
  clients.push(client);
  res.status(201).json(client);
};

exports.getClient = (req, res, next) => {
  const client = clients.find(c => c.id === Number(req.params.id));
  if (!client) return next(new CustomError('Client not found', 404));
  res.json(client);
};
