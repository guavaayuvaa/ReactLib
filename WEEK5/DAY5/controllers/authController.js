const AuthService = require('../services/AuthService');
const DeviceService = require('../services/DeviceService');
const SessionService = require('../services/SessionService');

exports.register = (req, res) => {
  try {
    const user = AuthService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = AuthService.login(req.body);

  
    await DeviceService.saveDevice(user.id, {
      userAgent: req.headers['user-agent'],
      ip: req.ip
    });

    await SessionService.saveSession(user.id, req.ip, req.headers['user-agent']);

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
