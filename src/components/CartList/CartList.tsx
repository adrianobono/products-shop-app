import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "../../store/CartStore";
import styles from "./CartList.module.scss";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Checkout } from "../../components/Checkout";
import { Button } from "../Button";

function CartList() {
  const [buy, setBuy] = useState(false);
  const { cart } = useCartStore();
  let total: number = 0;
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options: StripeElementsOptionsMode = {
    amount: 1,
    mode: "payment",
    currency: "usd",
  };
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
          options.amount = total !== 0 ? total : 1;
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
        <Button
          data-testid="buy"
          onClick={() => setBuy(true)}
          className={styles["buy"]}
        >
          Order
        </Button>
        <span> Total: {(total / 100).toFixed(2)}</span>
      </div>
      {cart.length > 0 && buy && (
        <div className={styles["checkout"]}>
          <Elements stripe={stripePromise} options={options}>
            <Checkout />
          </Elements>
        </div>
      )}
    </div>
  );
}

export default CartList;
