import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "../../store/CartStore";
import styles from "./CartContainer.module.scss";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Checkout } from "../../components/Checkout";

function CartContainer() {
  const { cart } = useCartStore();
  let total: number = 0;
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options: StripeElementsOptionsMode = {
    amount: 1,
    mode: "payment",
    currency: "usd",
  };
  return (
    <div className={styles["cart-container__wrapper"]}>
      Cart
      <ul className={styles["cart-container__list"]}>
        {cart?.map((item) => {
          total += Math.floor(item.value * item.quantity * 100);
          options.amount = total;
          return (
            <li className={styles["cart-container__item"]}>
              <span>Product: {item.title}</span>
              <span>Value: {item.value}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Total: {item.quantity * item.value}</span>
            </li>
          );
        })}
      </ul>
      Order Total: {(total / 100).toFixed(2)}
      <Elements stripe={stripePromise} options={options}>
        <Checkout />
      </Elements>
    </div>
  );
}

export default CartContainer;
