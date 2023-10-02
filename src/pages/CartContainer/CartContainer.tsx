import { useCartStore } from "../../store/CartStore";
import styles from "./CartContainer.module.scss";

function CartContainer() {
  const { cart } = useCartStore();
  let total = 0;
  let list = [];
  return (
    <div className={styles["cart-container__wrapper"]}>
      Cart
      <ul className={styles["cart-container__list"]}>
        {cart?.map((item) => {
          total += item.value;
          return (
            <li className={styles["cart-container__item"]}>
              <span>Product: {item.title}</span>
              <span>Value: {item.value}</span>
            </li>
          );
        })}
      </ul>
      Order Total: {total.toFixed(2)}
    </div>
  );
}

export default CartContainer;
