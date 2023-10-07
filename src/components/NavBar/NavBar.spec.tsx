import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  it("Should render a NavBar component", () => {
    const { container } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
