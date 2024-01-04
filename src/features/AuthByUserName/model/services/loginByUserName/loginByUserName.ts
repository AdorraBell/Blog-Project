import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const LoginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'login/LoginByUserName',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      console.log(`response${response}`);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
