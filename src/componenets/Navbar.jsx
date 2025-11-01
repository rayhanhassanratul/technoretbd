import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      {" "}
      {/* ব্যাকগ্রাউন্ড ডার্ক গ্রে এবং শ্যাডো যোগ করা হলো */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          {" "}
          {/* লোগো এবং টেক্সট এলাইন করার জন্য flex এবং space-x-3 */}
          <img
            src={logo}
            alt="Technoret BD Logo"
            className="h-8 w-8 rounded-full object-cover"
          />{" "}
          {/* h-8 এবং w-8 দিয়ে সাইজ ঠিক করা হলো, rounded-full এবং object-cover যোগ করা হলো */}
          <h2 className="text-xl font-extrabold tracking-wider">
            Technoret BD
          </h2>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {" "}
          {/* gap-8 এর বদলে space-x-8, font-medium যোগ করা হলো */}
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Products
          </li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Offers
          </li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-md">
            {" "}
            {/* py-1 এর বদলে py-2 এবং rounded-md এর বদলে rounded-lg */}
            Cart
          </button>

          {/* Mobile Menu icon */}
          <button className="md:hidden text-2xl focus:outline-none">
            {" "}
            {/* Focus রিমুভ করার জন্য focus:outline-none যোগ করা হলো */}☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
