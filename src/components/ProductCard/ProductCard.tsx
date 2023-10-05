import { Button } from "../Button";
import { useEffect, useState } from "react";
import { ProductsDTO } from "../../types/dto";

import styles from "./ProductCard.module.scss";
import { useCartStore } from "../../store/CartStore";

interface ProductsListProps {
  products: ProductsDTO[];
  product: ProductsDTO;
}

export const ProductCard = ({ products, product }: ProductsListProps) => {
  const { cart, addToCart, removeFromCart, setProducts } = useCartStore();

  useEffect(() => {
    setProducts(products);
  }, []);

  const handleSetQuantity = (cartQty: number, value: number) => {
    product.quantity = !cartQty ? 1 : +cartQty + value;

    value === -1 && removeFromCart(product);
    value === 1 && addToCart(product);
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
          onClick={() => handleSetQuantity(itemCart[0]?.quantity, -1)}
        >
          Remove
        </Button>
        <span>{itemCart[0]?.quantity | 0}</span>
        <Button
          disabled={product.quantity >= product.stock}
          onClick={() => handleSetQuantity(itemCart[0]?.quantity, 1)}
        >
          Add to cart
        </Button>
      </span>
    </li>
  );
};
