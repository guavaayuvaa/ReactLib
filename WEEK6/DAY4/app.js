const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const employeeRoutes = require('./routes/employeeRoutes');

require('dotenv').config();

connectDB();

app.use(express.json());
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
