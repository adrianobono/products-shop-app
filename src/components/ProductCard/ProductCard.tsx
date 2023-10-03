import { Button } from "../Button";
import { useState } from "react";
import { ProductsDTO } from "../../types/dto";

import styles from "./ProductCard.module.scss";
import { useCartStore } from "../../store/CartStore";
import { useQuery } from "@tanstack/react-query";
import { deleteProduct } from "../../services/DataProductsSevices";

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

  const handleCrud = (type: string, id: number) => {
    type === "del" && deleteProduct(id);
  };

  return (
    <li className={styles["product-card__item"]} key={product.id}>
      <span className={styles["product-card__buttons-crud"]}>
        <Button
          onClick={() => handleCrud("del", product.id)}
          className={styles["product-card__button-delete"]}
        >
          Delete
        </Button>
        <Button className={styles["product-card__button-edit"]}>Edit</Button>
      </span>
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
