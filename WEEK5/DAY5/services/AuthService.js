const users = []; 

module.exports = {
  register: ({ username, password }) => {
    if (users.find(u => u.username === username)) {
      throw new Error('User already exists');
    }
    const user = { id: Date.now().toString(), username, password };
    users.push(user);
    return user;
  },

  login: ({ username, password }) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return user;
  }
};
