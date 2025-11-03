import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, category, price, rating, image, description } = product;

  return (
    <div
      className="group relative border border-gray-100 rounded-3xl bg-white 
                    shadow-lg w-72 mx-auto my-5 overflow-hidden transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 bg-gray-50 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain h-full p-3 transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          In Stock
        </span>
        <span className="absolute bottom-3 right-3 bg-indigo-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 truncate group-hover:text-indigo-600 transition">
          {name}
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description.substring(0, 50)}...
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-cyan-600">৳{price}</p>
          <p className="flex items-center bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full text-sm shadow-sm">
            <span className="text-lg mr-1">★</span> {rating}
          </p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600
                     text-white font-bold text-lg tracking-wide shadow-md hover:from-indigo-700 
                     hover:to-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
