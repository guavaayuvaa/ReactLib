const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, loginUser } = require('./authService');

const app = express();
app.use(bodyParser.json());

app.post('/auth/register', async (req, res) => {
  const result = await registerUser(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/auth/login', async (req, res) => {
  const result = await loginUser(req.body);
  if (result.error) {
    return res.status(401).json({ error: result.error });
  }
  res.json({ token: result.token });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`AuthService running on http://localhost:${PORT}`));
