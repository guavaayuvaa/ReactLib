import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';
import { login, logout } from './features/auth/authSlice';
import { fetchUserProfile } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.user.profile);
  const status = useSelector(state => state.user.status);

  const handleLogin = () => {
    const dummyToken = 'abc123';
    dispatch(login(dummyToken));
    dispatch(fetchUserProfile(dummyToken));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>

      <hr />

      <h2>Auth</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <p>Token: {token || 'Not logged in'}</p>

      <hr />

      <h2>User Profile</h2>
      {status === 'loading' && <p>Loading...</p>}
      {user && (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
