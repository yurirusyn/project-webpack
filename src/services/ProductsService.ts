import axios from "axios";

const API = "https://62160e807428a1d2a3598008.mockapi.io/bicicle";

export function fetchProducts() {
  const URL = API;
  return axios.get(URL);
}

export const ProductsService = {
  fetchProducts,
};
