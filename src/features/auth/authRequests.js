import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerQuery,
  loginQuery,
  logoutQuery,
  getUserQuery,
  updateUserQuery,
  getRefreshUser,
} from "../../utils/api";
import { setCookie, deleteCookie, getCookie } from "../../utils/cookies";

export const registerUser = createAsyncThunk(
  "register/fetch",
  async (userInfo) => {
    const res = await registerQuery(userInfo);
    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", res.refreshToken);
    return res.user;
  }
);

export const loginUser = createAsyncThunk("login/fetch", async (userInfo) => {
  const res = await loginQuery(userInfo);
  setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
  setCookie("refreshToken", res.refreshToken);
  return res.user;
});

export const logoutUser = createAsyncThunk("logout/fetch", async (token) => {
  const res = await logoutQuery(token);
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  return res;
});

export const getUserInfo = createAsyncThunk("getUserInfo/fetch", (token) => {
  return getUserQuery(token)
    .then((res) => res.user)
    .catch((err) => {
      if (err.message === "jwt expired" || "jwt malformed") {
        getRefreshUser(getCookie("refreshToken"));
      }
    });
});

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo/fetch",
  async (userInfo) => {
    const res = await updateUserQuery(userInfo);
    return res.user;
  }
);
