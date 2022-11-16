import React from "react";
import { render, waitFor } from "@testing-library/react";
import ProductCart from "../../ProductCart/ProductCart.tsx";
import ProductsPage from "../ProductsPage.tsx";
import { useAppSelector } from "../../../hooks/redux.ts";
import productsMock from "../../../common/__fixtures__";

jest.mock("../../../hooks/redux.ts", () => ({
  useAppSelector: jest.fn(),
}));

useAppSelector.mockReturnValue(productsMock);

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(
      <ProductsPage>
        <ProductCart products={productsMock} />
      </ProductsPage>
    );
  });

  return result;
};
describe("ProductPage", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should all cart comp elements", async () => {
    const { getAllByTestId } = await renderComponent();
    expect(getAllByTestId("product-cart-element").length).toBe(
      productsMock.length
    );
  });
});
