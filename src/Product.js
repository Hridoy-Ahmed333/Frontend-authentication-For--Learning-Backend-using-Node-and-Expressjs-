import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/error");
      return;
    }

    fetch("http://localhost:8080/products", {
      headers: {
        Authorization: `Bearer ${token}`,
        //Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => navigate("/error"));
  }, [navigate]);
  console.log(products);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Product;
