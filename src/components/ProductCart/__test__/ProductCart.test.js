import React from "react";
import { render, waitFor } from "@testing-library/react";
import ProductCart from "../ProductCart.tsx";
import productsMock from "../__fixtures__/index";

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<ProductCart products={productsMock} />);
  });

  return result;
};

describe("ProductCart component", () => {
  it("Should all brand text in an element", async () => {
    const { getAllByText } = await renderComponent();
    productsMock.forEach((el) => expect(getAllByText(el.brand).length).toBe(2));
  });

  it("Should render all images", async () => {
    const { getAllByRole } = await renderComponent();
    expect(getAllByRole("img").length).toBe(2);
  });

  it("Should render all buttons", async () => {
    const { getAllByRole } = await renderComponent();
    expect(getAllByRole("button").length).toBe(2);
  });

  it("Should render images properly", async () => {
    const { getAllByRole } = await renderComponent();
    const imgElement = getAllByRole("img");
    for (let i = 0; i < productsMock.length; i += 1) {
      expect(imgElement[i].src).toBe(productsMock[i].thumbnail);
    }
  });
});
