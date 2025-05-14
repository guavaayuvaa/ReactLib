

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, fetchUserProfileAPI } from './authAPI';


export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await loginAPI(credentials);
  return response.token;
});


export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  const profile = await fetchUserProfileAPI(token);
  return profile;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;