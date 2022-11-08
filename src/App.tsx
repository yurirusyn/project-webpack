import React from "react";
import Header from "./components/Header/Header.tsx";
import {GlobalStyle} from "./Stayle.ts"
import {Routes, Route} from "react-router-dom"
import Products from "./components/Products/Products.tsx";
import About from "./components/About/About.tsx";




function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/Home" />
      <Route path="/Products" element={<Products />} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </>
    );
}
export default App;
