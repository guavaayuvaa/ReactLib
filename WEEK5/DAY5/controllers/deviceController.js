const DeviceService = require('../services/DeviceService');

exports.getDevices = async (req, res) => {
  const { userId } = req.params;
  const devices = await DeviceService.getDevices(userId);
  res.json(devices);
};
