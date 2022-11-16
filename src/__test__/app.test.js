import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { PAGES } from "../common/constants";
import { useAppSelector, useAppDispatch } from "../hooks/redux.ts";

jest.mock("react-redux");
jest.mock("../hooks/redux.ts", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

const renderComponent = async () => {
  let result;

  await waitFor(async () => {
    result = render(<App />, { wrapper: BrowserRouter });
  });

  return result;
};

it("shout render Header component", async () => {
  const mockedDispatch = jest.fn();
  useAppDispatch.mockReturnValue(mockedDispatch);
  const { getAllByTestId, getAllByText } = await renderComponent();
  const pageLinksDesktop = getAllByTestId("page-element");
  const pageLinksMobile = getAllByTestId("page-element-mobile");

  expect(pageLinksDesktop.length).toBe(PAGES.length);
  expect(pageLinksMobile.length).toBe(PAGES.length);
  PAGES.forEach((page) => expect(getAllByText(page).length).toBe(2));
});
