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
    product.quantity = sum;

    value === -1 && removeFromCart(product);
    value === 1 && addToCart(product);

    sum >= 0 && setQuantity(sum);
    console.log(cart);
  };

  const itemCart = cart.filter((item: any) => item.id === product.id);

  return (
    <li className={styles["product-card__item"]} key={product.id}>
      <img src={product.srcImage} alt={product.altImage} />
      <p>{product.title}</p>
      <span>${product.value}</span>
      <span className={styles["product-card__buttons-shop"]}>
        <Button
          disabled={itemCart[0]?.quantity === 0 || !itemCart[0]}
          onClick={() => handleSetQuantity(-1)}
        >
          Remove
        </Button>
        <span>{itemCart[0]?.quantity | 0}</span>
        <Button onClick={() => handleSetQuantity(1)}>Add to cart</Button>
      </span>
    </li>
  );
};
