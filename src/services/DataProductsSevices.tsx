import { AxiosError } from "axios";
import { productsApi } from "../api";
import { ProductsDTO } from "../types/dto";
import { useQuery } from "@tanstack/react-query";

async function getProducts() {
  const { data } = await productsApi.get("/products");
  return data;
}

export function useFetchProducts() {
  return useQuery(["products"], () => getProducts());
}

export const deleteProduct = async (id: any): Promise<any> => {
  try {
    const { data } = await productsApi.delete(`/products/${id}`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};

export const patchProduct = async (id: any, product: any): Promise<any> => {
  product.value = Number(product.value);
  try {
    const { data } = await productsApi.patch(`/products/${id}`, product);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};

export const postProduct = async (product: ProductsDTO): Promise<any> => {
  delete product["id"];
  try {
    const { data } = await productsApi.post(`/products/`, product);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};
