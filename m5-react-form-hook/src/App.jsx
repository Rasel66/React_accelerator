import { useState } from "react";
import LoginForm from "./forms/LoginForm";
import RegistrationForm from "./forms/RegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LoginForm /> */}
      <RegistrationForm />
    </>
  );
}

export default App;
