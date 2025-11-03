import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 backdrop-blur-md bg-opacity-90 transition-all duration-300 mb-10">
      {/* ব্যাকগ্রাউন্ডে সামান্য ট্রান্সপারেন্সি ও ব্লার ইফেক্ট */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Technoret BD Logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-cyan-500"
          />
          <h2 className="text-xl font-extrabold tracking-wider text-cyan-400">
            Technoret BD
          </h2>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "Products", "Offers", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-cyan-400 transition duration-300 cursor-pointer relative group"
            >
              {item}
              {/* underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-cyan-500/30">
            Cart
          </button>

          {/* Mobile Menu icon */}
          <button className="md:hidden text-3xl focus:outline-none hover:text-cyan-400 transition duration-300">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
