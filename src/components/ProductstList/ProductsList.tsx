import { useQuery } from "@tanstack/react-query";
import { ProductsDTO } from "../../types/dto";
import { ProductCard } from "../ProductCard";
import { getProducts } from "../../services/DataProductsSevices";
import styles from "./ProductsList.module.scss";
import Loading from "../Loading/Loading";

export const ProductsList = () => {
  const { data: productsList, isLoading } = useQuery(
    ["getAllProducts", "products"],
    () => getProducts()
  );
  if (isLoading || !productsList) {
    return <Loading />;
  }

  return (
    <ul className={styles["products-list__wrapper"]}>
      {productsList?.map((item: ProductsDTO) => (
        <ProductCard product={item} />
      ))}
    </ul>
  );
};
