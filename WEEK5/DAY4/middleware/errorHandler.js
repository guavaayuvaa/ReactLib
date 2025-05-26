const { logError } = require('./logger');

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  logError(err);
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;
