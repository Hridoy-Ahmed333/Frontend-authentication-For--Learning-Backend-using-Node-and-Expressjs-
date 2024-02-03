import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Product from "./Product";
import Error from "./Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
