const fs = require('fs');
const path = require('path');

exports.getLastErrorLogs = (req, res, next) => {
  const filePath = path.join(__dirname, '../logs/error.log');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return next(err);

    const lines = data.trim().split('\n');
    const last20 = lines.slice(-40); 
    res.set('Content-Type', 'text/plain').send(last20.join('\n'));
  });
};
