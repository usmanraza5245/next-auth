import { fetchAllProducts, fetchProductById } from "@/services/apis/ServerSide";
import React from "react";

function ProductDetail(props) {
  console.log("props...", props);
  return <div>ProductDetail</div>;
}

export default ProductDetail;

export async function getStaticPaths() {
  const response = await fetchAllProducts();
  const { products } = response.data;
  const path =
    products?.map((product) => ({
      params: {
        productId: product.id.toString(),
      },
    })) || [];

  return {
    paths: path,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //   console.log("context...", params);
  const { productId } = params;
  const response = await fetchProductById(productId);
  const { products } = response.data;
  //   console.log("response...", products);
  return {
    props: {
      product: products,
    },
  };
}
