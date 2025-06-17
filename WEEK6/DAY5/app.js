const express = require('express');

const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;