import React, { useContext } from "react";
import { Context } from "../store/context";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

  if (!store.token) {
    return <div>Access Denied: Please log in.</div>;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-4">Welcome! You have successfully logged in.</h2>

      <div className="d-flex justify-content-center align-items-center vh-100">
  <div className="col-12 col-md-6 text-center p-4 border rounded bg-light">
    <p className="text-break">Your token is: {store.token}</p>
  </div>
</div>


      <button onClick={handleLogout} className="btn btn-danger mt-4">
        Log Out
      </button>
    </div>
  );
};

export default Private;
