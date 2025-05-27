
const { readJSON, writeJSON } = require('../utils/fileHelper');
const FILE = './data/devices.json';

module.exports = {
  async saveDevice(userId, info) {
    const data = await readJSON(FILE);
    data[userId] = data[userId] || [];
    data[userId].push({ id: Date.now(), ...info });
    await writeJSON(FILE, data);
  },

  async getDevices(userId) {
    const data = await readJSON(FILE);
    return data[userId] || [];
  }
};
