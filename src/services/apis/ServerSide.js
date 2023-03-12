import axios from "axios";

export const fetchAllProducts = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const fetchProductById = async (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
