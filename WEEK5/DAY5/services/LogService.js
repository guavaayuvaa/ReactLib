
const { readJSON, writeJSON } = require('../utils/fileHelper');
const FILE = './data/logs.json';

module.exports = {
  async log(message, level = 'info') {
    const data = await readJSON(FILE);
    data.push({ timestamp: new Date().toISOString(), message, level });
    await writeJSON(FILE, data);
  },

  async getAll() {
    return await readJSON(FILE);
  }
};
