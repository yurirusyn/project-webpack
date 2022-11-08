import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom"
// import s from "./styles/style.css";

// eslint-disable-next-line import/no-import-module-exports
// import App from "./App";

// console.log("count:", s);

// const title = "React with Webpack and Babel";

// eslint-disable-next-line no-undef
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// eslint-disable-next-line react/jsx-filename-extension
root.render(<BrowserRouter><App /></BrowserRouter>);
