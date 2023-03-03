import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerQuery,
  loginQuery,
  logoutQuery,
  getUserQuery,
  updateUserQuery,
  refreshTokenQuery,
  token,
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

const refreshUser = (refresh) => {
  return refreshTokenQuery(refresh).then((res) => {
    setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", res.refreshToken);
    console.log("вроде куки встали")
    console.log(res.accessToken)
    console.log(res.refreshToken)
    getUserInfo(token);
  });
}

export const getUserInfo = createAsyncThunk("getUserInfo/fetch", (token) => {
  return getUserQuery(token)
    .then((res) => res.user)
    .catch((err) => {
      console.log(err.message);
      if (err.message === "jwt expired" || "jwt malformed") {
        refreshUser(getCookie("refreshToken"));
        console.log("refresh send");
      }
    });
});

//err.response.data.message === 'jwt expired' || 'jwt malformed'  

// export function checkUserAccess() {
//   return function (dispatch) {
//     checkUserAccessRequest(getCookie("accessToken"))
//       .then((res) => {
//         dispatch({ type: USER_ACCESS_ALLOWED, payload: res.user });
//       })
//       .catch((err) => {
//         if (err.message === "jwt expired" || "jwt malformed") {
//           dispatch(refreshUserToken(getCookie("refreshToken")));
//         }
//       });
//   };
// }

// /* thunk обновления токена */
// export function refreshUserToken(refreshToken) {
//   return function (dispatch) {
//     return refreshTokenRequest(refreshToken).then((res) => {
//       setCookie("accessToken", parseCookie(res.accessToken));
//       setCookie("refreshToken", res.refreshToken);
//       dispatch(checkUserAccess(getCookie("accessToken")));
//     });
//   };
// }

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo/fetch",
  async (userInfo) => {
    const res = await updateUserQuery(userInfo);
    return res.user;
  }
);
