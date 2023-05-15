import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);
export const fetchCreate = createAsyncThunk(
  'contacts/fetchCreate',
  async contact => {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  }
);
export const fetchDelete = createAsyncThunk(
  'contacts/fetchDelete',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data.id;
  }
);
