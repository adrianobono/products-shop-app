import { Button } from "../Button";
import { useState } from "react";
import { ProductsDTO } from "../../types/dto";

import styles from "./ProductCard.module.scss";
import { useCartStore } from "../../store/CartStore";

interface ProductsListProps {
  product: ProductsDTO;
}

export const ProductCard = ({ product }: ProductsListProps) => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const [quantity, setQuantity] = useState(0);

  const handleSetQuantity = (value: number) => {
    let sum = quantity + value;

    value === -1 && removeFromCart(product.id);
    value === 1 && addToCart(product);

    sum >= 0 && setQuantity(sum);
  };

  return (
    <li className={styles["product-card__item"]} key={product.id}>
      <Button className={styles["product-card__button-edit"]}>Edit</Button>
      <img src={product.srcImage} alt={product.altImage} />
      <p>{product.title}</p>
      <span>${product.value}</span>
      <span className={styles["product-card__buttons-shop"]}>
        <Button disabled={quantity === 0} onClick={() => handleSetQuantity(-1)}>
          Remove
        </Button>
        <span> {quantity} </span>
        <Button onClick={() => handleSetQuantity(1)}>Add to cart</Button>
      </span>
    </li>
  );
};
