import React, { createContext, useReducer, useContext } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, 'light');

  const toggleTheme = () => dispatch({ type: 'TOGGLE' });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
