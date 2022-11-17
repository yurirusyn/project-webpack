import React from "react";
import { Container } from "@mui/system";
import { useAppSelector } from "../../hooks/redux";
import Slider from "../Slider/Slider";

function HomePage() {
  const products = useAppSelector((state) => state.product.list);
  return (
    <Container sx={{ marginTop: 3 }} maxWidth="xl">
      <Slider />
    </Container>
  );
}

export default HomePage;
