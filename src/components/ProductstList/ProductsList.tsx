import { ProductCard } from "../ProductCard";
import { useFetchProducts } from "../../services/DataProductsSevices";
import Loading from "../Loading/Loading";
import styles from "./ProductsList.module.scss";

export const ProductsList = () => {
  const { data: productsList, isLoading } = useFetchProducts();
  if (isLoading || !productsList) return <Loading />;

  return (
    <ul className={styles["products-list__wrapper"]}>
      {productsList?.map((item: any) => (
        <ProductCard product={item} />
      ))}
    </ul>
  );
};
