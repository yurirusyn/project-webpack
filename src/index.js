import React from "react";
import { createRoot } from "react-dom/client";
// import s from "./styles/style.css";

// eslint-disable-next-line import/no-import-module-exports
import App from "./App";

// console.log("count:", s);

const title = "React with Webpack and Babel43434";

// eslint-disable-next-line no-undef
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// eslint-disable-next-line react/jsx-filename-extension
root.render(<App title={title} />);
