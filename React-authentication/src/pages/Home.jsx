import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) return <div>User info is loading...</div>;
  return (
    <div>
      <h1 className="text-3xl my-4">Home</h1>
      <h5 className="text-bold">Welcome, {user.email}</h5>
      <button
        type="submit"
        className="bg-red-500 text-white my-4"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
