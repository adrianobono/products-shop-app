import { fireEvent, render } from "@testing-library/react";
import { Checkout } from "./Checkout";
import { ProdutctsMock } from "../../mocks/products.mock";
import { act } from "react-dom/test-utils";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptionsMode } from "@stripe/stripe-js";
import { cart } from "../../mocks/cart.mock";

describe("Checkout", () => {
  it("Should render form  with add and remove buttons", () => {
    const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
    const options: StripeElementsOptionsMode = {
      amount: 1,
      mode: "payment",
      currency: "usd",
    };
    const { container, getByTestId } = render(
      <Checkout cartTotal={1520} cartList={cart} token="1abckfjoieji" />
    );

    expect(container).toBeInTheDocument();
  });
});
