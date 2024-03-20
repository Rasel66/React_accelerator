import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddProduct = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 0,
    thumbnail: "",
  });

  //post data
  // const newProducts = async (newProduct) => {
  //   const res = await axios.post("http://localhost:3000/products", newProduct);
  //   return res.data;
  // };
  const mutation = useMutation({
    mutationFn: (newProducts) =>
      axios.post("http://localhost:3000/products", newProducts),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // new id generation
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };
  if (mutation.isLoading) {
    return <span>Submitting...</span>;
  }
  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }
  return (
    <div className="m-2 p-2" style={{ width: "20%" }}>
      <h2>Add Product</h2>
      {mutation.isSuccess && <p>Product added!</p>}
      <form
        className="d-flex flex-column form-control"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product title"
        />
        <input
          type="number"
          value={state.price}
          name="price"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product price"
        />
        <input
          type="number"
          value={state.rating}
          name="rating"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product rating"
        />
        <input
          type="text"
          value={state.thumbnail}
          name="thumbnail"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product thumbnail URL"
        />
        <textarea
          value={state.description}
          name="description"
          onChange={handleChange}
          className="my-2 border p-2 rounded"
          placeholder="Enter product description"
        />
        <button type="submit" className="btn btn-info">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
