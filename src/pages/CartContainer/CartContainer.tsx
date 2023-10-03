import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "../../store/CartStore";
import styles from "./CartContainer.module.scss";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { CartCheckout } from "../../components/CartCheckout";

function CartContainer() {
  const { cart } = useCartStore();
  let total = 0;
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options: StripeElementsOptionsMode = {
    amount: 1099,
    mode: "payment",
    currency: "usd",
  };
  return (
    <div className={styles["cart-container__wrapper"]}>
      Cart
      <ul className={styles["cart-container__list"]}>
        {cart?.map((item) => {
          total += item.value;
          options.amount = Math.floor(total);
          return (
            <li className={styles["cart-container__item"]}>
              <span>Product: {item.title}</span>
              <span>Value: {item.value}</span>
            </li>
          );
        })}
      </ul>
      Order Total: {total.toFixed(2)}
      <Elements stripe={stripePromise} options={options}>
        <CartCheckout />
      </Elements>
    </div>
  );
}

export default CartContainer;
