import React, { useContext, useState } from "react";
import { Context } from "../store/context";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.signup(email, password);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-5 border rounded bg-light">
        <h2 className="mb-4">Sign Up</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Sign Up
        </button>
        <Link to="/" className="btn btn-secondary w-100">
          Back
        </Link>
      </form>
    </div>
  );
};

export default Signup;
