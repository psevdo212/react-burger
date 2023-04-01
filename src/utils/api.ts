import { getCookie } from "./cookies";
import { TFormStateType, TUserInfoState } from "./types";


type TReject = {
  response: {
    data: {
      message: string,
    }
  }
}


const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
};

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err: TReject) => Promise.reject(err));
  }
};

function request(url: string, options: object) {
  return fetch(url, options).then(checkResponse);
}

export const getData = () => {
  return request(`${config.baseUrl}/ingredients`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const makeOrder = (ingredientIDs: string[]) => {
  return request(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify(ingredientIDs),
  });
};

export const registerQuery = (userInfo: TFormStateType) => {
  return request(`${config.baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    }),
  });
};

export const loginQuery = (userInfo: TFormStateType) => {
  return request(`${config.baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userInfo.email,
      password: userInfo.password,
    }),
  });
};

export const logoutQuery = () => {
  return request(`${config.baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  });
};

export function getUserQuery(token: string) {
  return request(`${config.baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
}

export function updateUserQuery(userInfo: TUserInfoState) {
  return request(`${config.baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    }),
  });
}

export const restorePassQuery = (email: string | undefined) => {
  return request(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
};

export const resetPassQuery = (newpass: string | undefined, code: string | undefined) => {
  return request(`${config.baseUrl}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: newpass,
      token: code,
    }),
  });
};

export function refreshTokenQuery(refresh: string) {
  return request(`${config.baseUrl}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refresh,
    }),
  });
}

