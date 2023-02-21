import { setCookie, getCookie } from "./cookies";

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getData = () => {
  return request(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  });
};

export const makeOrder = (ingredientIDs) => {
  return request(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(ingredientIDs),
  });
};

export function registerQuery(userInfo) {
  return request(`${config.baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
    }),
  });
}
