import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header.tsx";
import { pages } from "../../../common/constants";

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<Header />, { wrapper: BrowserRouter });
  });

  return result;
};
test("Check links in header", async () => {
  const { getAllByTestId, getAllByText } = await renderComponent();
  const pageLinksDesktop = getAllByTestId("page-element");
  const pageLinksMobile = getAllByTestId("page-element-mobile");

  expect(pageLinksDesktop.length).toBe(pages.length);
  expect(pageLinksMobile.length).toBe(pages.length);
  pages.forEach((page) => expect(getAllByText(page).length).toBe(2));
});

test("Check links in header", async () => {
  const { getAllByTestId } = await renderComponent();
  const pageLinksMobile = getAllByTestId("page-element-mobile");
  expect(pageLinksMobile[0].href).toContain(pages[0]);
  expect(pageLinksMobile[1].href).toContain(pages[1]);
  expect(pageLinksMobile[2].href).toContain(pages[2]);
});
