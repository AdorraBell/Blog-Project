import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { LoginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByUserName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(LoginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(LoginByUserName.rejected, (state) => {
        state.isLoading = false;
        state.error = 'error';
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
