import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  updateUserInfo,
} from "./authRequests";
import { IAuthState } from "../../utils/interfaces";
import {  TFormStateType, TUserInfo } from "../../utils/types";

const initialState: IAuthState = {
  isLoading: false,
  userInfo: {
    name: "",
    email: "",
  },
  error: false,
  isLogged: false,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<TFormStateType>) => {
          state.userInfo = action.payload;
          state.isLogged = true;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.error = true;
      })
      .addCase(loginUser.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<TFormStateType>) => {
          return {
            isLoading: false,
            userInfo: action.payload,
            error: false,
            isLogged: true,
            success: true,
          };
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        return { ...state, error: false };
      })
      .addCase(logoutUser.pending, (state, action) => {
        return { ...state };
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        return { ...state, error: false };
      })
      .addCase(getUserInfo.pending, (state, action) => {
        return { ...state, isLoading: true };
      })
      .addCase(
        getUserInfo.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          return {
            isLoading: false,
            userInfo: action.payload,
            error: false,
            isLogged: true,
            success: true,
          };
        }
      )
      .addCase(getUserInfo.rejected, (state, action) => {
        return {
          isLoading: false,
          userInfo: action.payload,
          error: true,
          isLogged: false,
          success: false,
        };
      })
      .addCase(updateUserInfo.pending, (state, action) => {
        return { ...state };
      })
      .addCase(
        updateUserInfo.fulfilled,
        (state, action: PayloadAction<TUserInfo>) => {
          return {
            ...state,
            userInfo: action.payload,
            error: false,
            isLogged: true,
          };
        }
      )
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default authSlice.reducer;
