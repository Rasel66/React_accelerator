import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retrieveProducts,
    refetchInterval: 1000,
  });

  if (isLoading) return <div>Products Loading......</div>;
  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <div
      className="d-flex flex-column justify-center items-center"
      style={{ width: "60%" }}
    >
      <h2 className="text-3xl my-2">Product List</h2>
      <ul
        className="d-flex flex-wrap justify-center items-center"
        style={{ listStyleType: "none" }}
      >
        {products.data &&
          products.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-column items-center m-2 border rounded"
            >
              <img
                className="rounded"
                style={{ height: "250px", width: "250px" }}
                src={product.thumbnail}
                alt={product.title}
              />
              <h6 className="text-center my-3 mx-2">{product.title}</h6>
            </li>
          ))}
      </ul>
      <div className="d-flex align-items-center justify-content-center">
        {products.prev && (
          <button
            className=" my-2 mx-2 btn btn-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setPage(products.prev)}
          >
            Previous
          </button>
        )}
        {products.next && (
          <button
            className="my-2 btn btn-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setPage(products.next)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
