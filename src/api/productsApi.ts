import axios from "axios";

export const productsApi = axios.create({
  baseURL: `${process.env.REACT_APP_PRODUCTS_API}`,
});
