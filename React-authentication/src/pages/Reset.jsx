import React, { useState } from "react";
import { passwordReset } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  return (
    <div>
      <h1 className="text-3xl my-3">Reset Your Info</h1>
      <div>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter new email address"
        />
        <button
          onClick={() => passwordReset(email)}
          className="bg-blue-500 text-white my-3"
        >
          Submit
        </button>
      </div>
      <p>
        Don't have an account? <NavLink to={"/register"}>Register Now</NavLink>
      </p>
    </div>
  );
};

export default Reset;
