const { createEmployeeWithPayroll } = require('../services/transactionService');

async function bulkInsert(req, res) {
  const inputs = req.body;
  const results = [];

  for (const item of inputs) {
    try {
      const result = await createEmployeeWithPayroll(item);
      results.push(result);
    } catch (err) {
      console.error(`Error for ${item.employee.email}:`, err.message);
    }
  }

  res.json(results);
}

module.exports = { bulkInsert };
