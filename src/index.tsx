import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import {store} from './store';

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>);
