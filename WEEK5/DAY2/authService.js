const bcrypt = require('bcrypt');
const { isValidEmail } = require('./utils');
const users = [];

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function verifyPassword(inputPassword, storedHash) {
  return await bcrypt.compare(inputPassword, storedHash);
}


async function registerUser({ name, email, password }) {
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

  const hashedPassword = await hashPassword(password);
  users.push({ name, email, password: hashedPassword });
  return { success: true };
}


async function loginUser({ email, password }) {
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const user = users.find(user => user.email === email);
  if (!user) {
    return { error: 'Invalid email or password' };
  }

  const isMatch = await verifyPassword(password, user.password);
  if (!isMatch) {
    return { error: 'Invalid email or password' };
  }

  const token = require('crypto').randomBytes(16).toString('hex');
  return { token };
}

module.exports = { registerUser, loginUser };
