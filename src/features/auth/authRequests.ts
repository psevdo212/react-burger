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
import { TFormStateType, TUserInfoState } from "../../utils/types";

export const registerUser = createAsyncThunk(
  "register/fetch",
  async (userInfo: TFormStateType) => {
    const res = await registerQuery(userInfo);
    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", res.refreshToken);
    return res.user;
  }
);

export const loginUser = createAsyncThunk(
  "login/fetch",
  async (userInfo: TFormStateType) => {
    const res = await loginQuery(userInfo);
    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", res.refreshToken);
    return res.user;
  }
);

export const logoutUser = createAsyncThunk(
  "logout/fetch",
  async (token: string | undefined) => {
    const res = await logoutQuery();
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    return res;
  }
);

export const getUserInfo: any = createAsyncThunk("getUserInfo/fetch", () => {
  return getUserQuery(getCookie("accessToken"))
    .then((res) => res.user)
    .catch((err) => elapsedToken(err).then(getUserInfo()));
});

const elapsedToken = (err: any) =>
  err.then((err: any) => {
    if (err.message === "jwt expired" || "jwt malformed") {
      refreshUser(getCookie("refreshToken"));
    }
    return Promise.reject(err);
  });

const refreshUser = (refresh: string) => {
  refreshTokenQuery(refresh)
    .then((res) => {
      setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", res.refreshToken);
      return res.user;
    })
    .catch((err) => {
      setCookie("accessToken", false);
      setCookie("refreshToken", false);
      return Promise.reject(err);
    });
};

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo/fetch",
  async (userInfo: TUserInfoState) => {
    const res = await updateUserQuery(userInfo);
    return res.user;
  }
);
