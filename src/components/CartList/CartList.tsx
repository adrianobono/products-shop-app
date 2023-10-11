import { useState } from "react";
import { useCartStore } from "../../store/CartStore";
import styles from "./CartList.module.scss";
import { Checkout } from "../../components/Checkout";
import { Button } from "../Button";

function CartList() {
  const { cart } = useCartStore();
  let total: number = 0;
  const [buy, setBuy] = useState(false);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>Checkout</div>
      <ul className={styles["list"]}>
        <li className={styles["header"]}>
          <span>Quantity</span>
          <span>Product</span>
          <span>Price</span>
          <span>Total</span>
        </li>
        {cart?.map((item) => {
          total += Math.floor(item.value * item.quantity * 100);
          return (
            total > 0 && (
              <li className={styles["item"]}>
                <span>{item.quantity}</span>
                <span>Product: {item.title}</span>
                <span>${Number(item.value).toFixed(2)}</span>
                <span>${(item.quantity * item.value).toFixed(2)}</span>
              </li>
            )
          );
        })}
      </ul>
      <div className={styles["total"]}>
        {cart.length > 0 && <Checkout cartTotal={total} cartList={cart} />}
        <span> Total: {(total / 100).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartList;
