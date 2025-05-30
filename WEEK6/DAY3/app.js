const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

app.use(errorHandler);

module.exports = app;
