import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Counter from './components/Counter/Counter';
import SearchInput from './components/SearchInput/SearchInput';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <h1>Custom Hooks & Theme Context </h1>

        <ThemeToggle />

        <div style={{ marginTop: '2rem' }}>
          <h2> usePrevious Hook</h2>
          <Counter />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>useDebounce Hook</h2>
          <SearchInput />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
