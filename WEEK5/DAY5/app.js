const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use(limiter);

app.use(require('./middleware/inputSanitizer'));


app.use('/auth', require('./routes/authRoutes'));
app.use('/clients', require('./routes/clientRoutes'));
app.use('/devices', require('./routes/deviceRoutes'));
app.use('/sessions', require('./routes/sessionRoutes'));
app.use('/logs', require('./routes/logRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
