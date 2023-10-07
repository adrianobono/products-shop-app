import axios from "axios";

export const productsApi = axios.create({
  //using api url declared in external file .env
  baseURL: `${process.env.REACT_APP_PRODUCTS_API}`,
});
