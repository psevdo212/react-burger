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

export const makeOrder = (ingIds) => {
  return request(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      ingredients: ingIds,
    }),
  });
};
