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

export const deleteProduct = async (product: any): Promise<any> => {
  try {
    const { data } = await productsApi.delete(`/products/${product.id}`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    return [];
  }
};

export const patchProduct = async (product: any): Promise<any> => {
  product.value = Number(product.value);
  try {
    const { data } = await productsApi.patch(
      `/products/${product.id}`,
      product
    );
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
