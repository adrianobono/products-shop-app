import { useEffect } from "react";
import { useCartStore } from "../../store/CartStore";
import { Button } from "../Button";
import { ProductsDTO } from "../../types/dto";
import styles from "./ProductCard.module.scss";

interface ProductsListProps {
  product: ProductsDTO;
  products: ProductsDTO[];
}

export const ProductCard = ({ product, products }: ProductsListProps) => {
  const { cart, addToCart, removeFromCart, setProducts } = useCartStore();

  const handleSetQuantity = (cartQty: number, value: number) => {
    product.quantity = !cartQty ? 1 : +cartQty + value;

    // logic by value to add or remove a product at cart
    value === -1 && removeFromCart(product);
    value === 1 && addToCart(product);
  };

  //filter to get the same product cart to compare parameters
  const itemCart = cart.filter((item: any) => item.id === product.id);

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <li className={styles["list__item"]} key={product.id}>
      <img src={product.srcImage} alt={product.altImage} />
      <p>{product.title}</p>
      <span>${Number(product.value).toFixed(2)}</span>
      <span className={styles["list__buttons-shop"]}>
        <Button
          data-testid={`button-cart-remove${product.id}`}
          disabled={itemCart[0]?.quantity === 0 || !itemCart[0]}
          onClick={() => handleSetQuantity(itemCart[0]?.quantity, -1)}
        >
          Remove
        </Button>
        <span>{itemCart[0]?.quantity | 0}</span>
        <Button
          data-testid={`button-cart-add${product.id}`}
          disabled={product.quantity >= product.stock}
          onClick={() => handleSetQuantity(itemCart[0]?.quantity, 1)}
        >
          Add to cart
        </Button>
      </span>
    </li>
  );
};
