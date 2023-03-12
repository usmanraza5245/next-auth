import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Product from "./Product";

function ProductPage({ products }) {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" textAlign={"center"} mb={4}>
        Fake Store
      </Typography>
      <Grid container spacing={4}>
        {products?.length > 0 &&
          products.map((product, key) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={product?.id}>
              <Link
                href={`products/${product?.id}`}
                style={{ textDecoration: "none" }}
              >
                <Product
                  title={product?.title}
                  description={product.description}
                  img={`http://localhost:8000/${product?.images[0].path}`}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default ProductPage;
