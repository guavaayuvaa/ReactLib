
const { readJSON, writeJSON } = require('../utils/fileHelper');
const FILE = './data/sessions.json';

module.exports = {
  async saveSession(userId, ip, userAgent) {
    const data = await readJSON(FILE);
    data[userId] = data[userId] || [];
    data[userId].push({
      timestamp: new Date().toISOString(),
      ip,
      userAgent
    });
    await writeJSON(FILE, data);
  },

  async getSessions(userId) {
    const data = await readJSON(FILE);
    return data[userId] || [];
  }
};
