import { useTheme } from './contexts/ThemeContext';
import { useAuth } from './contexts/AuthContext';
import Quiz from './components/Quiz';

const App = () => {
  const { dark, toggleTheme } = useTheme();
  const { authenticated, toggleAuth } = useAuth();

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <button onClick={toggleTheme} className="px-4 py-2 bg-green-600 text-white rounded">
          Toggle {dark ? 'Light' : 'Dark'} Theme
        </button>
        <button onClick={toggleAuth} className="px-4 py-2 bg-purple-600 text-white rounded">
          {authenticated ? 'Logout' : 'Login'}
        </button>
      </div>
      {authenticated ? <Quiz /> : <p className="text-center">Please login to start the quiz.</p>}
    </div>
  );
};

export default App;
