import { fireEvent, render } from "@testing-library/react";
import { EditForm } from "./EditForm";
import { ProdutctsMock } from "../../mocks/products.mock";
import { act } from "react-dom/test-utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("EditForm", () => {
  const queryClient = new QueryClient();

  it("Should render form  with send button disabled", () => {
    const { container, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <EditForm item={ProdutctsMock[0] as any} />
      </QueryClientProvider>
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId("send-btn")).toBeInTheDocument();
    expect(getByTestId("send-btn")).toHaveValue("Send");
    // There's no action because input start disabled
    expect(getByTestId("send-btn")).toHaveAttribute("disabled");
  });

  it("Should show error alert message on change title produc to have lengh = 2", () => {
    const { getByTestId, findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <EditForm item={ProdutctsMock[0] as any} />
      </QueryClientProvider>
    );

    const input = getByTestId("input-title");

    act(async () => {
      fireEvent.change(input, { target: { value: "Ts" } });
      expect(await findByTestId("title-error")).ToBeInTheDocument();
    });
  });
});
