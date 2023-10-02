import { AxiosError } from "axios";
import { productsApi } from "../api";
export const getProducts = async (): Promise<any> => {
  try {
    const { data } = await productsApi.get("/products");
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    console.log(err.name);
    return [];
  }
};
