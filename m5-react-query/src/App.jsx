import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex m-2">
      <AddProduct />
      <ProductList />
      <ProductDetails id={1} />
    </div>
  );
}

export default App;
