import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, category, price, rating, image, description } = product;

  return (
    <div
      className="border border-gray-200 rounded-2xl p-4 bg-white shadow-xl 
                 w-72 mx-auto transform hover:scale-[1.03] transition duration-300 
                 hover:shadow-2xl hover:border-cyan-500 my-5 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl h-52 flex items-center justify-center bg-gray-100">
        {" "}
        {/* Added flex, items-center, justify-center */}
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain transition duration-500 ease-in-out hover:opacity-90" // Key change: object-contain
        />
        {/* Status Tag */}
        <div
          className="absolute top-2 left-2 px-3 py-1 text-xs font-bold 
                     rounded-full uppercase bg-green-600 text-white shadow-md"
        >
          In Stock
        </div>
        {/* Category Tag */}
        <div
          className="absolute bottom-2 right-2 px-3 py-1 text-xs text-white font-semibold 
                        rounded-full bg-indigo-600/90 backdrop-blur-sm"
        >
          {category}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900 truncate" title={name}>
          {name}
        </h2>

        <div className="flex items-center mt-2 justify-between">
          <p className="text-sm text-gray-500 line-clamp-2" title={description}>
            {description.substring(0, 40)}...
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center border-t border-gray-100 pt-3">
          {/* Price */}
          <p className="text-3xl font-extrabold text-cyan-600">৳{price}</p>

          {/* Rating */}
          <p className="text-lg font-bold flex items-center bg-yellow-100 text-yellow-600 px-3 py-0.5 rounded-full">
            <span className="text-xl mr-1">★</span> {rating}
          </p>
        </div>

        {/* Single Add to Cart Button (Full Width) */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 py-3 rounded-xl bg-indigo-600 text-white font-bold 
                     text-lg tracking-wider shadow-lg hover:bg-indigo-700 transition duration-200 
                     transform hover:scale-[1.01]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
