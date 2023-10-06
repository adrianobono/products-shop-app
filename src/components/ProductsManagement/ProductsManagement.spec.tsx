import { fireEvent, render } from "@testing-library/react";
import { ProductsManagement } from "./ProductsManagement";
import { ProdutctsMock } from "../../mocks/products.mock";
import { act } from "react-dom/test-utils";

describe("ProductsManagement", () => {
  it("Should render form  with add and remove buttons", () => {
    const { container, getByTestId } = render(<ProductsManagement />);

    expect(container).toBeInTheDocument();
    expect(getByTestId("title")).toBeInTheDocument();
  });
});
