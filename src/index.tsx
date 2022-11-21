import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import App from "./App";
import { store } from "./store/index";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Normalize />
      <App />
    </BrowserRouter>
  </Provider>
);
