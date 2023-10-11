import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import { useCartStore } from "../../store/CartStore";

export const Checkout = (cartTotal: any, cart: any) => {
  const { resetCart } = useCartStore();

  async function handleToken(token: any) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, cart }
    );

    const { status } = response.data;
    // Mock implementation that use no success status to finish
   
    if (status === "success") {
      console.log("Success! Check email for details");
    } else {
      console.log("Something went wrong");
      resetCart();
    }
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={cartTotal * 100}
        name="Checkout"
        billingAddress
        shippingAddress
      />
    </div>
  );
};
