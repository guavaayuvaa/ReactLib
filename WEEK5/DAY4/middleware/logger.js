const fs = require('fs');
const path = require('path');

const accessLog = path.join(__dirname, '../logs/access.log');
const errorLog = path.join(__dirname, '../logs/error.log');

const requestLogger = (req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.ip} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(accessLog, log, err => {
    if (err) console.error('Failed to write access log');
  });
  next();
};

const logError = (error) => {
  const log = `${new Date().toISOString()} - ${error.message}\n${error.stack}\n\n`;
  fs.appendFile(errorLog, log, err => {
    if (err) console.error('Failed to write error log');
  });
};

module.exports = { requestLogger, logError };
