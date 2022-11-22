import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import App from "./App";
import { store } from "./store/index";
import { GlobalStyle } from "./Style"

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Normalize />
      <GlobalStyle />
              <App />
    </BrowserRouter>
  </Provider>
);
