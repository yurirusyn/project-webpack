import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header.tsx";
import { PAGES } from "../../../common/constants";

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<Header />, { wrapper: BrowserRouter });
  });

  return result;
};
describe("Header component", () => {
  it("Should links in header", async () => {
    const { getAllByTestId, getAllByText } = await renderComponent();
    const pageLinksDesktop = getAllByTestId("page-element");
    const pageLinksMobile = getAllByTestId("page-element-mobile");

    expect(pageLinksDesktop.length).toBe(PAGES.length);
    expect(pageLinksMobile.length).toBe(PAGES.length);
    PAGES.forEach((page) => expect(getAllByText(page).length).toBe(2));
  });

  it("Should links in header", async () => {
    const { getAllByTestId } = await renderComponent();
    const pageLinksMobile = getAllByTestId("page-element-mobile");

    expect(pageLinksMobile[0].href).toContain(PAGES[0]);
    expect(pageLinksMobile[1].href).toContain(PAGES[1]);
    expect(pageLinksMobile[2].href).toContain(PAGES[2]);
  });
});
