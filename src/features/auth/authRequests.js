import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerQuery, loginQuery, logoutQuery } from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/cookies";

export const registerUser = createAsyncThunk(
  "register/fetch",
  async (userInfo) => {
      const res = await registerQuery(userInfo);
      setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", res.refreshToken);
      return res.user;
  }
);

export const loginUser = createAsyncThunk(
  "login/fetch",
  async (userInfo) => {
      const res = await loginQuery(userInfo);
      setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", res.refreshToken);
      return res.user;
  }
);

export const logoutUser = createAsyncThunk(
  "logout/fetch",
  async (token) => {
    const res = await logoutQuery(token);
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    return res;
  }
)