import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const label = "Add to cart";

  it("Should render a button element an check specific label", () => {
    const { container, getByText } = render(<Button>{label}</Button>);

    expect(container).toBeInTheDocument();
    expect(getByText(label)).toBeInTheDocument();
  });
});
