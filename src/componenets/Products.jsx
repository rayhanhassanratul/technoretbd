import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
