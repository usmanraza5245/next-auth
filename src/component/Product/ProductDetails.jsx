import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ImageSlider from "../Slider/ImageSlider";
import Details from "./Details";

function ProductDetails({ product }) {
  console.log("props...", product);
  return (
    <Container>
      <Box width={"100%"} py={"70px"}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={7}>
            <div className="container">
              <ImageSlider images={product?.images} />
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <Details product={product} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductDetails;
