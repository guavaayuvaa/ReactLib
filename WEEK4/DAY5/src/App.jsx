import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import UserList from "./components/UserList";
import PerformanceTest from "./components/PerformanceTest";
import AddItem from "./components/AddItem";
import DerivedStateDisplay from "./components/DerivedStateDisplay";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <div className="p-4 space-y-4">
        <UserList />
        <DerivedStateDisplay />
        <PerformanceTest />
        <AddItem/>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
