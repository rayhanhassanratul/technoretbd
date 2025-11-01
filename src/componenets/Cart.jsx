import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Cart = ({ carts }) => {
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  const subtotal = carts.reduce((acc, item) => acc + Number(item.price), 0);

  useEffect(() => {
    if (location === "inside") setDeliveryCharge(80);
    else if (location === "outside") setDeliveryCharge(100);
    else setDeliveryCharge(0);
  }, [location]);

  useEffect(() => {
    setTotal(subtotal + deliveryCharge);
  }, [subtotal, deliveryCharge]);

  const handlePlaceOrder = () => {
    if (!location) {
      alert("Please select your delivery location!");
      return;
    }

    const message = `Order Details:
${carts.map((item) => `${item.name} - ${item.price}৳`).join("\n")}
Delivery: ${location === "inside" ? "Dhaka (Inside City)" : "Outside Dhaka"}
Total: ${total}৳`;

    const pageID = "61580720459983";
    const messengerLink = `https://m.me/${pageID}?text=${encodeURIComponent(
      message
    )}`;

    window.open(messengerLink, "_blank");
    setShowTotal(true);
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-6 shadow-2xl rounded-2xl mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
        🛒 Your Cart
      </h2>

      {carts.length === 0 ? (
        <p className="text-gray-500 text-center">No items in cart</p>
      ) : (
        <>
          {/* Cart List */}
          <ul className="divide-y divide-gray-200 mb-4 max-h-96 overflow-y-auto">
            {carts.map((item, index) => (
              <li key={index} className="py-2 flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 flex justify-between items-center">
                  <span className="truncate">{item.name}</span>
                  <div className="flex flex-col items-end">
                    <span>{item.price}৳</span>
                    {Number(item.stock) > 0 ? (
                      <span className="text-green-600 text-sm">In Stock</span>
                    ) : (
                      <span className="text-red-500 text-sm">Out of Stock</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Location select */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Delivery Location:
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Location</option>
              <option value="inside">Dhaka (Inside City)</option>
              <option value="outside">Outside Dhaka</option>
            </select>
          </div>

          {/* Amount details */}
          <div className="text-gray-700 space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{subtotal}৳</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge:</span>
              <span>{deliveryCharge}৳</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>{total}৳</span>
            </div>
          </div>

          {/* Place order button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Place Order
          </button>

          {/* Animated Total Result */}
          <AnimatePresence>
            {showTotal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md text-center"
              >
                <h3 className="text-lg font-semibold text-green-800">
                  ✅ Order Placed Successfully!
                </h3>
                <p className="text-gray-700 mt-2">
                  Check your Messenger for order details.
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
