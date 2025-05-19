import { useStore } from '../store/store';

const Header = () => {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  return (
    <div className="p-4 bg-blue-200 flex justify-between">
      <h1 className="text-xl font-bold">Zustand + RTK Query</h1>
      {user ? (
        <div>
          Logged in as {user.name}{" "}
          <button className="ml-2 text-red-500" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};

export default Header;
