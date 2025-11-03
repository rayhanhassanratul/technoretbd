import React, { useState } from "react";

import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Products from "./componenets/Products";
import Cart from "./componenets/Cart";

const App = () => {
  const [carts, setCarts] = useState([]);

  // ✅ Add to cart with quantity system
  const addToCart = (item) => {
    setCarts((prevCarts) => {
      const existingItem = prevCarts.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return prevCarts.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCarts, { ...item, quantity: 1 }];
      }
    });
  };

  // ✅ Increase quantity from cart
  const increaseQty = (name) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease quantity from cart
  const decreaseQty = (name) => {
    setCarts((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col ">
      <Navbar />

      <div className="flex flex-col lg:flex-row flex-grow mt-10">
        {/* 🛒 Cart Section */}
        <div
          className="w-full lg:w-[30%] bg-gray-100 
             order-1 lg:order-2 
             relative lg:sticky lg:top-0 lg:h-[calc(100vh-64px)] overflow-y-auto p-4 "
        >
          <Cart
            carts={carts}
            setCarts={setCarts}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        </div>

        {/* 🛍️ Products Section */}
        <div className="w-full lg:w-[70%] order-2 lg:order-1">
          <Products addToCart={addToCart} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
