import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.token = '';
        state.user = '';
        state.isLoggedIn = false;
      }),
});

export const authReduser = authSlice.reducer;
