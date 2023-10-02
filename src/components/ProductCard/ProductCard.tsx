import { ProductsDTO } from "../../types/dto";
import { Button } from "../Button";
import styles from "./ProductCard.module.scss";

interface ProductsListProps {
  product: ProductsDTO;
}

export const ProductCard = ({ product }: ProductsListProps) => {
  return (
    <li className={styles["product-card__item"]} key={product.id}>
      <Button className={styles["product-card__button-edit"]}>Edit</Button>
      <img src={product.srcImage} alt={product.altImage} />
      <p>{product.title}</p>
      <span>${product.value}</span>
      <Button>Add to cart</Button>
    </li>
  );
};
