import express from 'express';
import clientRoutes from './routes/clientRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/clients', clientRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
