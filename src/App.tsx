import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./Style";
import Products from "./components/ProductCart/ProductCart.jsx";
import About from "./components/About/About";
import { fetchProducts } from "./store/productSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import ProductsPage from "./components/ProductsPage/ProductsPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/Home" />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
