import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  modal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.rejected, () => {
        Notiflix.Notify.failure('Похоже такой пользователь уже существует');
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.token = '';
        state.user = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }),
});

export const authReduser = authSlice.reducer;
