import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="mt-4 p-2 bg-indigo-500 text-white rounded">
      Toggle Theme ({theme})
    </button>
  );
};

export default ThemeToggle;
