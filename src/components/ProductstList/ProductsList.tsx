import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "../ProductCard";
import { getProducts } from "../../services/DataProductsSevices";
import { useCartStore } from "../../store/CartStore";
import Loading from "../Loading/Loading";
import styles from "./ProductsList.module.scss";

export const ProductsList = () => {
  const { products, setProducts } = useCartStore();
  const { data: productsList, isLoading } = useQuery(
    ["products"],
    () => getProducts(),
    { cacheTime: 5000 }
  );
  if (isLoading || !productsList) {
    return <Loading />;
  } else {
    setTimeout(() => {
      setProducts(productsList);
    }, 200);
  }

  return (
    <ul className={styles["products-list__wrapper"]}>
      {products?.map((item: any) => (
        <ProductCard product={item} />
      ))}
    </ul>
  );
};
