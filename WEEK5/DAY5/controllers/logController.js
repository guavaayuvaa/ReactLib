const LogService = require('../services/LogService');

exports.getLogs = async (req, res) => {
  const logs = await LogService.getAll();
  res.json(logs);
};
