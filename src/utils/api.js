import { getCookie } from "./cookies";


const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => Promise.reject(err));
  }
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getData = () => {
  return request(`${config.baseUrl}/ingredients`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const makeOrder = (ingredientIDs) => {
  return request(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify(ingredientIDs),
  });
};

export const registerQuery = (userInfo) => {
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

export const loginQuery = (userInfo) => {
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

export function getUserQuery(token) {
  return request(`${config.baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getCookie("accessToken"),
    },
  });
}

export function updateUserQuery(userInfo) {
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

export const restorePassQuery = (email) => {
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

export const resetPassQuery = (newpass, code) => {
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

export function refreshTokenQuery(refresh) {
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

