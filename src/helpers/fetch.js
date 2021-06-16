export const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `https://inbank.accionpoint.com/api/dev/bo/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `https://inbank.accionpoint.com/api/dev/bo/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }
};
