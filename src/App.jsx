import React, { useState } from "react";

import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Products from "./componenets/Products";
import Cart from "./componenets/Cart";

const App = () => {
  const [carts, setCarts] = useState([]);

  // ✅ Add to cart function
  const addToCart = (item) => {
    setCarts((prev) => [...prev, item]);
  };

  // 🧹 Optional: to check in console
  console.log("Cart items:", carts);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Products Section */}
        <div className="w-full lg:w-[70%]">
          <Products addToCart={addToCart} />
        </div>

        {/* Cart Section */}
        <div className="w-full lg:w-[30%] bg-gray-100">
          <Cart carts={carts} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
