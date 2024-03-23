import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Simple from "./components/Simple";
import Keyframes from "./components/Keyframes";
import ButtonTap from "./components/ButtonTap";
import TextMotion from "./components/TextMotion";
import Varients from "./components/Varients";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Simple />
      <Keyframes />
      <ButtonTap /> */}
      {/* <TextMotion /> */}
      <Varients />
    </>
  );
}

export default App;
