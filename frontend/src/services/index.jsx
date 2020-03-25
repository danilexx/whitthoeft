import axios from "axios";
import Cookies from "js-cookie";

const https = require("https");

// const prod = process.env.NODE_ENV === "production";
const baseURL = "https://whitthoeft.herokuapp.com";
// "http://localhost:3333/";
// ? "https://stormycommerce.com/api/"
// : "https://155.138.211.217/api/";
export const api = axios.create({
  baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const getHomePageProducts = async (limit = 4) =>
  api.get(`/products?itemsPerPage=${limit}`);

export const getProducts = async (page, itemsPerPage = 12) =>
  api.get(`/products?itemsPerPage=${itemsPerPage}&page=${page}`);

export const getProduct = async name => {
  const response = await api.get(`/products/${name}`);
  return response;
};

export const registerUser = async values => api.post("/users", values);

export const loginUser = async values => api.post("/sessions", values);

export const searchProducts = async productName => {
  const response = await api.get(`/search?product_name=${productName}`);
  return response;
};

export const fetchUserData = async ssrToken => {
  const token = ssrToken || Cookies.get("token");
  const response = await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getCepInfo = async cep => {
  const response = await axios.get(`http://api.postmon.com.br/v1/cep/${cep}`);
  return response;
};

export const addAddress = async address => {
  const token = Cookies.get("token");
  const response = await api.post(`/addresses`, address, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export const deleteAddress = async id => {
  const token = Cookies.get("token");
  const response = await api.delete(`/addresses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const editUser = async (values, ssrToken) => {
  const token = ssrToken || Cookies.get("token");
  const response = await api.put(`/users`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getAddresses = async () => {
  const token = Cookies.get("token");
  const response = await api.get(`/addresses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const addCreditCard = async creditCard => {
  const token = Cookies.get("token");
  const response = await api.post(`/credit_cards`, creditCard, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
export const deleteCreditCard = async creditCardId => {
  const token = Cookies.get("token");
  const response = await api.delete(`/credit_cards/${creditCardId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getCreditCards = async () => {
  const token = Cookies.get("token");
  const response = await api.get(`/credit_cards`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const buyProduct = async values => {
  const token = Cookies.get("token");
  const response = await api.post(`/Checkout/credit_card`, values, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const addFavorite = productId => {
  const token = Cookies.get("token");
  return api.post(
    `/favorites`,
    {
      productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const removeFavorite = productId => {
  const token = Cookies.get("token");
  // console.log(token, productId);
  return api.delete(`/favorites/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getFavorites = async ssrToken => {
  const token = ssrToken || Cookies.get("token");
  const response = await api.get("/favorites", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
