import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  updateUserInfo,
} from "./authRequests";

const initialState = {
  isLoading: false,
  userInfo: null,
  error: null,
  isLogged: false,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLogged = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          isLoading: false,
          userInfo: action.payload,
          error: null,
          isLogged: true,
          success: true,
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
        return { ...state, isLoading: true };
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        return {
          isLoading: false,
          userInfo: action.payload,
          error: null,
          isLogged: true,
          success: true,
        };
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        return {...state, error: true}
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
