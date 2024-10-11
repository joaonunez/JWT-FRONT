import React, { useContext, useState } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await actions.login(email, password);
  
    if (result && result.success) {
      navigate("/private");
    } else {
      alert(result?.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="p-5 border rounded bg-light">
        <h2 className="mb-4">Login</h2>
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
          Log In
        </button>
        <Link to="/signup" className="btn btn-link w-100">
          Go to Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
