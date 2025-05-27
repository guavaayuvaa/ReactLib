
const { readJSON, writeJSON } = require('../utils/fileHelper');
const FILE = './data/clients.json';

module.exports = {
  async getAll(userId) {
    const data = await readJSON(FILE);
    return data[userId] || [];
  },

  async add(userId, client) {
    const data = await readJSON(FILE);
    data[userId] = data[userId] || [];
    data[userId].push({ id: Date.now(), ...client });
    await writeJSON(FILE, data);
    return client;
  },

  
};
