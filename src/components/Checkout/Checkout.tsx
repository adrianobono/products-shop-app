import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import styles from "./Checkout.module.scss";
import { Button } from "../Button";
import { BiSolidCartAdd } from "react-icons/bi";
import { useCartStore } from "../../store/CartStore";

export const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { setCart } = useCartStore();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event: any) => {
    // just a mock to show payment

    event.preventDefault();

    if (elements == null) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(null);
      return;
    }

    const res = await fetch("/create-intent", {
      method: "POST",
    });

    const { client_secret: clientSecret } = await res.json();

    const error = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "/cart",
      },
    });

    if (error) {
      setErrorMessage(null);
    } else {
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
      <Button type="submit" disabled={!stripe || !elements}>
        Pay <BiSolidCartAdd size={32} />
      </Button>
    </div>
  );
};
