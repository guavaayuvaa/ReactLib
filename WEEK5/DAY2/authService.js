const crypto = require('crypto');
const { isValidEmail } = require('./utils');

const users = [];

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function registerUser({ name, email, password }) {
  if (!name || !email || !password) {
    return { error: 'Name, email, and password are required' };
  }

  if (!isValidEmail(email)) {
    return { error: 'Invalid email format' };
  }

  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return { error: 'User already exists' };
  }

  const hashedPassword = hashPassword(password);
  users.push({ name, email, password: hashedPassword });
  return { success: true };
}

function loginUser({ email, password }) {
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const user = users.find(user => user.email === email);
  if (!user) {
    return { error: 'Invalid email or password' };
  }

  const hashedPassword = hashPassword(password);
  if (user.password !== hashedPassword) {
    return { error: 'Invalid email or password' };
  }

  const token = crypto.randomBytes(16).toString('hex');
  return { token };
}

module.exports = { registerUser, loginUser };
