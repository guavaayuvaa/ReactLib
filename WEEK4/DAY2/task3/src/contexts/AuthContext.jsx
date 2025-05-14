import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const toggleAuth = () => setAuthenticated(prev => !prev);

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
