import axios from "axios";

// const endPoint = "products";

// eslint-disable-next-line import/prefer-default-export
export const getAllProductsAPI = () =>
  axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
