import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { TProduct } from "../../store/productSlice.ts";

interface IProductCartProps {
  products: TProduct[];
}

export default function ProductCart({ products }: IProductCartProps) {
  return (
    <Grid
      container
      sx={{ marginTop: 3 }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products &&
        products.map((product) => (
          <Grid xs={2} key={product.id}>
            <Card
              data-testid="product-cart-element"
              sx={{ maxWidth: 300, minHeight: 300 }}
            >
              <CardMedia
                data-testid="img-element"
                component="img"
                height="140"
                width="140"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.brand}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
