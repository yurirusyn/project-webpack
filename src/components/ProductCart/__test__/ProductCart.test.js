import React from "react";
import { render, waitFor } from "@testing-library/react";
import ProductCart from "../ProductCart.tsx";

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/2/1.jpg",
      "https://dummyjson.com/image/i/products/2/2.jpg",
      "https://dummyjson.com/image/i/products/2/3.jpg",
      "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
    ],
  },
];

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<ProductCart products={products} />);
  });

  return result;
};

test("Check all brand text in an element", async () => {
  const { getAllByText } = await renderComponent();
  products.forEach((el) => expect(getAllByText(el.brand).length).toBe(2));
});

test("Check all imges elements", async () => {
  const { getAllByRole } = await renderComponent();
  expect(getAllByRole("img").length).toBe(2);
});

test("Check all imges elements", async () => {
  const { getAllByRole } = await renderComponent();
  expect(getAllByRole("button").length).toBe(2);
});

test("Check all imges elements", async () => {
  const { getAllByRole, debug } = await renderComponent();
  const imgElement = getAllByRole("img");
  for (let i = 0; i < products.length; i += 1) {
    expect(imgElement[i].src).toBe(products[i].thumbnail);
  }
  debug();
});
