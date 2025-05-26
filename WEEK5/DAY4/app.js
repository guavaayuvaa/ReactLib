const express = require('express');
const app = express();
const clientRoutes = require('./routes/clientRoutes');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');
const { requestLogger } = require('./middleware/logger');
const { getLastErrorLogs } = require('./services/ErrorLogService');

app.use(express.json());
app.use(requestLogger);

app.use('/clients', clientRoutes);
app.get('/logs/errors', getLastErrorLogs);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
