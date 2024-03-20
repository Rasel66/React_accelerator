import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const retrieveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  if (error) return <div>An error occured: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ width: "20%" }}>
      <h2 className="my-2">Product Details</h2>
      <div className="d-flex flex-column border rounded p-1 bg-gray-100">
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.rating}/5</p>
      </div>
    </div>
  );
};
export default ProductDetails;
