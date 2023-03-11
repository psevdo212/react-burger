import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerQuery,
  loginQuery,
  logoutQuery,
  getUserQuery,
  updateUserQuery,
  refreshTokenQuery,
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
  const res = await logoutQuery("Bearer " + getCookie("accessToken"));
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  return res;
});

export const getUserInfo = createAsyncThunk("getUserInfo/fetch", () => {
  return getUserQuery()
    .then((res) => res.user)
    .catch((err) => elapsedToken(err).then(getUserInfo()));
});

const elapsedToken = (err) => err.then(err => {
  if (err.message === "jwt expired" || "jwt malformed") {
    refreshUser(getCookie("refreshToken"));
  }
  return Promise.reject(err)
})


const refreshUser = (refresh) => {
  refreshTokenQuery(refresh).then((res) => {
    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", res.refreshToken);
    return res.user
  }).catch((err) => {
    setCookie("accessToken", null);
    setCookie("refreshToken", null);
    return Promise.reject(err)
});
};

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo/fetch",
  async (userInfo) => {
    const res = await updateUserQuery(userInfo);
    return res.user;
  }
);
