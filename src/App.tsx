import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import {GlobalStyle} from "./Style"
import {Routes, Route} from "react-router-dom"
import Products from "./components/Products/Products.jsx";
import About from "./components/About/About";
import { fetchProducts } from "./store/productSlice";
import { useAppDispatch, useAppSelector } from './hooks/redux';



function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
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
