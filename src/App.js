import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Private from "./views/Private";
import injectContext from "./store/context";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </Router>
  );
};

export default injectContext(App);
