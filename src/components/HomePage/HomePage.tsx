import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import { Slider } from "../Slider/Slider";

function HomePage() {

  return (
    <Container sx={{ marginTop: 3 }} maxWidth="xl">
      <Box sx={{ maxWidth: 1066, margin: "0 auto" }}>
        <Slider />
      </Box>
    </Container>
  );
}

export default HomePage;
