import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // React Icons থেকে X icon

const Cart = ({ carts, setCarts }) => {
  const [location, setLocation] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [total, setTotal] = useState(0);

  const subtotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setTotal(subtotal + deliveryCharge);
  }, [subtotal, deliveryCharge]);

  const increaseQty = (index) => {
    const newCart = [...carts];
    newCart[index].quantity += 1;
    setCarts(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...carts];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCarts(newCart);
    } else {
      removeItem(index);
    }
  };

  const removeItem = (index) => {
    const newCart = [...carts];
    newCart.splice(index, 1);
    setCarts(newCart);
  };

  const handleLocationChange = (e) => {
    const loc = e.target.value;
    setLocation(loc);
    if (loc === "Dhaka") setDeliveryCharge(60);
    else if (loc === "Outside Dhaka") setDeliveryCharge(120);
    else setDeliveryCharge(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        🛒 Your Cart
      </h2>

      {carts.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        carts.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-100 py-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain rounded-xl bg-gray-50 p-1"
              />
              <div>
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">৳{item.price}</p>
              </div>
            </div>

            {/* Quantity + Remove Icon */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQty(index)}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-red-100 hover:bg-red-200 text-red-600 rounded-full"
              >
                −
              </button>
              <span className="font-semibold text-gray-800">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQty(index)}
                className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-green-100 hover:bg-green-200 text-green-600 rounded-full"
              >
                +
              </button>

              {/* Remove Icon */}
              <button
                onClick={() => removeItem(index)}
                className="ml-2 p-2 rounded-full hover:bg-red-100 transition"
                title="Remove Item"
              >
                <AiOutlineClose className="w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>
        ))
      )}

      {carts.length > 0 && (
        <div className="mt-6 space-y-3">
          <select
            value={location}
            onChange={handleLocationChange}
            className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
          >
            <option value="">Select Delivery Location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Outside Dhaka">Outside Dhaka</option>
          </select>

          <div className="flex justify-between text-gray-700 mt-2">
            <p>Subtotal:</p>
            <p className="font-semibold">৳{subtotal}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Delivery Charge:</p>
            <p className="font-semibold">৳{deliveryCharge}</p>
          </div>
          <div className="flex justify-between text-lg font-bold text-indigo-700 border-t border-gray-100 pt-3">
            <p>Total:</p>
            <p>৳{total}</p>
          </div>

          <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
