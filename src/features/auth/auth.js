import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  updateUserInfo,
} from "./authRequests";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state = initialState;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLogged = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state = initialState;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          userInfo: action.payload,
          error: null,
          isLogged: true,
        };
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        return { ...state };
      })
      .addCase(logoutUser.fulfilled, (state) => {
        return initialState;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUserInfo.pending, (state) => {
        return { ...state };
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        return {
          ...state,
          userInfo: action.payload,
          error: null,
          isLogged: true,
        };
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUserInfo.pending, (state) => {
        return { ...state };
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        return {
          ...state,
          userInfo: action.payload,
          error: null,
          isLogged: true,
        };
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
