export const validateClient = (client) => {
  const { name, email } = client;
  if (!name || typeof name !== 'string') return 'Invalid or missing name';
  if (!email || typeof email !== 'string' || !email.includes('@')) return 'Invalid or missing email';
  return null;
};

