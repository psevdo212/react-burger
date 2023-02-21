import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerQuery } from '../../utils/api';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

export const registerUser = createAsyncThunk(
  "register/fetch",
  async (userInfo) => {
    const response = await registerQuery(userInfo);
    return response.user;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state = initialState
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      return action.payload
    })
    .addCase(registerUser.rejected, (state ) => {
      state = initialState
    });
  },
});

export default authSlice.reducer


