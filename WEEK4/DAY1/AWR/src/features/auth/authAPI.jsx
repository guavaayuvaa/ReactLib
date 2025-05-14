
export const loginAPI = async ({ username, password }) => {
  if (username === 'admin' && password === 'password') {
    return { token: 'fake-jwt-token' };
  } else {
    throw new Error('Invalid credentials');
  }
};

export const fetchUserProfileAPI = async (token) => {
  if (token === 'fake-jwt-token') {
    return { id: 1, name: 'Admin User', email: 'admin@example.com' };
  } else {
    throw new Error('Invalid token');
  }
};


