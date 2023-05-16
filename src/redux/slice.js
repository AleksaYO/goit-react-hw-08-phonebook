import { initialState } from './initialState';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAll, fetchCreate, fetchDelete } from './operations';
import { logOut } from './auth/operations';
import Notiflix from 'notiflix';

const getContacts = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
};

const createContact = (state, { payload }) => {
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
};

const pendingContact = state => {
  state.contacts.isLoading = true;
};

const deleteContact = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload
  );
};

const rejectedContact = () => {
  Notiflix.Notify.failure('Где-то вы накосячили');
};

const fetchesPending = [fetchAll.pending, fetchCreate.pending];
const fetchesRejected = [
  fetchAll.rejected,
  fetchCreate.rejected,
  fetchDelete.rejected,
];

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    filteredContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAll.fulfilled, getContacts)
      .addCase(logOut.fulfilled, state => {
        state.contacts.items = [];
      })
      .addCase(fetchCreate.fulfilled, createContact)
      .addCase(fetchDelete.fulfilled, deleteContact)
      .addMatcher(isAnyOf(...fetchesPending), pendingContact)
      .addMatcher(isAnyOf(...fetchesRejected), rejectedContact),
});

export const { filteredContacts } = phonebookSlice.actions;

export const phoneReducer = phonebookSlice.reducer;
