import { AxiosError } from "axios";
import { productsApi } from "../api";
import { ProductsDTO } from "../types/dto";
import { useQuery } from "@tanstack/react-query";

export async function getProducts() {
  const { data } = await productsApi.get("/products");
  return data;
}

export function useFetchProducts() {
  return useQuery(["products"], () => getProducts());
}

export const deleteProduct = async (id: number): Promise<any> => {
  try {
    const { data } = await productsApi.delete(`/products/${id}`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};

export const patchProduct = async (
  id: number,
  product: ProductsDTO
): Promise<any> => {
  try {
    const { data } = await productsApi.patch(`/products/${id}`, product);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};

export const postProduct = async (
  id: number,
  product: ProductsDTO
): Promise<any> => {
  try {
    const { data } = await productsApi.post(`/products/${id}`, product);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};
