import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, category, price, rating, image, description } = product;

  return (
    <div
      className="border-2 border-gray-100 rounded-xl p-4 bg-white shadow-xl 
                 w-72 mx-auto transform hover:scale-105 transition duration-300 
                 hover:shadow-2xl hover:border-indigo-500 my-5"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain transition duration-300 ease-in-out 
                     hover:opacity-95 bg-gray-100"
        />

        <div
          className="absolute top-2 right-2 px-3 py-1 text-xs font-bold 
                     rounded-full uppercase bg-green-500 text-white"
        >
          In Stock
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">
          {category}
        </p>

        <h2
          className="text-xl font-bold mt-1 text-gray-900 truncate"
          title={name}
        >
          {name}
        </h2>

        <div className="flex justify-between items-center mt-3">
          <p className="text-2xl font-extrabold text-indigo-700">৳ {price}</p>
          <p className="text-lg text-yellow-500 font-bold flex items-center">
            <span className="text-2xl mr-1">★</span> {rating}
          </p>
        </div>

        <p
          className="text-sm text-gray-500 mt-2 line-clamp-2"
          title={description}
        >
          {description}
        </p>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 py-2 rounded-lg bg-yellow-500 text-gray-900 font-semibold 
                       shadow-md hover:bg-yellow-600 transition duration-150"
          >
            Buy Now
          </button>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 py-2 rounded-lg bg-indigo-600 text-white font-semibold 
                       shadow-md hover:bg-indigo-700 transition duration-150"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
