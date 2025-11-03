import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Cart = ({ carts, setCarts }) => {
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  const subtotal = carts.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  useEffect(() => {
    if (location === "inside") setDeliveryCharge(80);
    else if (location === "outside") setDeliveryCharge(130);
    else setDeliveryCharge(0);
  }, [location]);

  useEffect(() => {
    setTotal(subtotal + deliveryCharge);
  }, [subtotal, deliveryCharge]);

  // 🗑️ Remove item from cart
  const handleRemove = (index) => {
    const updatedCart = carts.filter((_, i) => i !== index);
    setCarts(updatedCart);
  };

  // 📨 Place order via Messenger
  const handlePlaceOrder = () => {
    if (!location) {
      alert("Please select your delivery location!");
      return;
    }

    const message = `Order Details:\n${carts
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ${item.price * item.quantity}৳`
      )
      .join("\n")}\n\nDelivery: ${
      location === "inside"
        ? "Dhaka (Inside City) - 80৳"
        : "Outside Dhaka - 130৳"
    }\n\nTotal: ${total}৳`;

    const pageID = "61580720459983";
    const messengerLink = `https://m.me/${pageID}?text=${encodeURIComponent(
      message
    )}`;

    window.open(messengerLink, "_blank");
    setShowTotal(true);
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-6 shadow-2xl rounded-2xl mt-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600 border-b pb-2">
        🛒 Your Cart
      </h2>

      {carts.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          Your cart is empty. Start shopping now!
        </p>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="divide-y divide-gray-200 mb-4 max-h-96 overflow-y-auto">
            {carts.map((item, index) => (
              <li
                key={index}
                className="py-3 flex items-center space-x-4 hover:bg-gray-50 transition duration-150 relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />

                <div className="flex-1 flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-800 block truncate pr-2">
                      {item.name}{" "}
                      <span className="text-sm text-gray-500">
                        x{item.quantity}
                      </span>
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      In Stock
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-cyan-700">
                    {item.price * item.quantity}৳
                  </span>
                </div>

                {/* 🗑️ Remove Button */}
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                  title="Remove item"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          {/* Location select */}
          <div className="mb-4 p-3 bg-indigo-50 rounded-lg">
            <label className="block text-gray-700 mb-2 font-bold">
              Select Delivery Location:
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 border-indigo-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
            >
              <option value="">Choose your Area</option>
              <option value="inside">Dhaka (Inside City) - 80৳</option>
              <option value="outside">Outside Dhaka - 130৳</option>
            </select>
          </div>

          {/* Amount details */}
          <div className="text-gray-700 space-y-3 mb-6 p-4 border border-gray-300 rounded-lg">
            <div className="flex justify-between text-sm">
              <span>Subtotal (Items):</span>
              <span className="font-semibold">{subtotal}৳</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Charge:</span>
              <span className="font-semibold text-red-500">
                {deliveryCharge}৳
              </span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between font-extrabold text-xl text-indigo-600">
              <span>Total Payable:</span>
              <span>{total}৳</span>
            </div>
          </div>

          {/* Place order button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-lg 
                       hover:bg-indigo-700 transition duration-200 shadow-xl transform hover:scale-[1.01]"
          >
            Place Order via Messenger
          </button>

          {/* Confirmation animation */}
          <AnimatePresence>
            {showTotal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-green-800">
                  🎉 Order Initiative Sent!
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  We've sent your order summary to Messenger. Please confirm
                  there.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Cart;
