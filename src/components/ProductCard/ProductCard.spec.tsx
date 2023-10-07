import { fireEvent, render } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { ProdutctsMock } from "../../mocks/products.mock";
import { act } from "react-dom/test-utils";

describe("ProductCard", () => {
  it("Should render form  with add and remove buttons", () => {
    const { container, getByTestId } = render(
      <ProductCard
        product={ProdutctsMock[0] as any}
        products={ProdutctsMock as any}
      />
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId("button-cart-add1")).toBeInTheDocument();
    expect(getByTestId("button-cart-remove1")).toBeInTheDocument();
  });
});
