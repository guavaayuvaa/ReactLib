// src/App.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, fetchUserProfile } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const { token, user, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = () => {
    dispatch(login(form)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        dispatch(fetchUserProfile());
      }
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login with Redux</h1>

      {token ? (
        <>
          <p>Logged in as: {user?.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
}

export default App;
