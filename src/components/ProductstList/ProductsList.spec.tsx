import { render } from "@testing-library/react";
import { ProductsList } from "./ProductsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("ProductsList", () => {
  it("Should render a button element an check specific label", () => {
    const queryClient = new QueryClient();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <ProductsList />
      </QueryClientProvider>
    );

    expect(container).toBeInTheDocument();
  });
});
