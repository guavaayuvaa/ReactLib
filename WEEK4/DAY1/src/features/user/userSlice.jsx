import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (token) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error('Failed to fetch profile');
    return await res.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
