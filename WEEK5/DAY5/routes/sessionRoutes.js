const SessionService = require('../services/SessionService');

exports.getSessions = async (req, res) => {
  const { userId } = req.params;
  const sessions = await SessionService.getSessions(userId);
  res.json(sessions);
};
