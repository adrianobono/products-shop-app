import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "../../store/CartStore";
import styles from "./CartContainer.module.scss";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Checkout } from "../../components/Checkout";
import CartList from "../../components/CartList/CartList";

function CartContainer() {
  return <CartList />;
}

export default CartContainer;
