import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl my-4">Register</h1>
      <form action="" className="flex flex-col">
        <div>
          <div className="my-2">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter Email Address"
            />
          </div>

          <div className="my-2">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          </div>

          <div className="my-2">
            <button
              className="btn btn-info bg-black text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <p>
        Already Have an Account? <NavLink to="/login"> Sign In</NavLink>
      </p>
      <p>
        Forgot Password? <NavLink to="/reset"> Reset Your Password</NavLink>
      </p>
    </div>
  );
};

export default Register;
