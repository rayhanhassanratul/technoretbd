import React, { useState } from "react";

import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Products from "./componenets/Products";
import Cart from "./componenets/Cart";

const App = () => {
  const [carts, setCarts] = useState([]);

  // ✅ Add to cart function
  const addToCart = (item) => {
    // Logic to update cart (e.g., merging duplicates or adding new item)
    // For simplicity, we just add the item here.
    setCarts((prev) => [...prev, item]);
  };

  // 🧹 Optional: to check in console
  console.log("Cart items:", carts);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Cart Section: Mobile Top (order-1), Desktop Right (lg:order-2). 
            Added 'lg:sticky', 'lg:top-0', 'lg:h-screen' for visible cart on scroll. */}
        <div
          className="w-full lg:w-[30%] bg-gray-100 
             order-1 lg:order-2 
             relative lg:sticky lg:top-0 lg:h-[calc(100vh-64px)] overflow-y-auto p-4"
        >
          <Cart carts={carts} />
        </div>

        {/* Products Section: Mobile Second (order-2), Desktop Left (lg:order-1). */}
        <div className="w-full lg:w-[70%] order-2 lg:order-1">
          <Products addToCart={addToCart} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
