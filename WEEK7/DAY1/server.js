const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const errorHandler = require('./utils/errorHandler');

dotenv.config(); 

const app = express();
app.use(express.json());

connectDB();

app.use('/api/employees', require('./routes/employeeRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/payroll', require('./routes/payrollRoutes'));
app.use('/api/cron', require('./routes/cronRoutes')); 
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));