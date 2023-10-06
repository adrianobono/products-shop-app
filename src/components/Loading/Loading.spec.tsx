import { render } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("Should render a Loading element that used before show products", () => {
    const { container } = render(<Loading />);

    expect(container).toBeInTheDocument();
  });
});
