import React from "react";
import { Container } from "@mui/system";
import { useAppSelector } from "../../hooks/redux";
import ProductCart from "../ProductCart/ProductCart";

function ProductsPage() {
  const products = useAppSelector((state) => state.product.list);
  
  return (
    <Container maxWidth="xl">
      <ProductCart products={products} />
    </Container>
  );
}

export default ProductsPage;
