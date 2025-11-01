import React from "react";
// আপনি যদি আইকন ব্যবহার করতে চান, যেমন: React Icons (npm install react-icons)
import { FaFacebook, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const facebookLink = "https://www.facebook.com/profile.php?id=61580720459983"; // # রিমুভ করা হয়েছে
  const whatsappNumber = "01300936643";
  const callNumber = "01402994798";
  const emailAddress = "info@technoretbd.com"; // একটি উদাহরণ ইমেইল যোগ করা হলো

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-cyan-600/50">
      {" "}
      {/* ডার্ক ব্যাকগ্রাউন্ড এবং টপ বর্ডার */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          {" "}
          {/* 3-কলাম লেআউট, যা মোবাইলে 1 কলাম হবে */}
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-extrabold text-cyan-500 mb-3 tracking-wider">
              Technoret BD
            </h3>
            <p className="text-sm">
              আপনার বিশ্বস্ত অনলাইন শপ। সেরা মূল্যে লেটেস্ট গ্যাজেট,
              ইলেকট্রনিক্স এবং ট্রেন্ডি প্রোডাক্টস পেতে আমাদের সাথেই থাকুন।
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Products
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Offers
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Blog
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                About Us
              </li>
            </ul>
          </div>
          {/* Column 3: Support & Policies (নতুন কলাম যোগ করা হলো) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-1">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Shipping & Delivery
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                Return Policy
              </li>
              <li className="hover:text-cyan-400 transition cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          {/* Column 4: Contact Info & Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-1">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-cyan-500" />
                <a
                  href={`tel:${callNumber}`}
                  className="hover:text-cyan-400 transition"
                >
                  {callNumber} (Call)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-500 text-xl" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  {whatsappNumber} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-cyan-500" />
                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-cyan-400 transition"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-5 flex space-x-4">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-500 hover:text-cyan-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-500 hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
              {/* আপনি চাইলে এখানে Instagram, Twitter এর আইকনও যোগ করতে পারেন */}
            </div>
          </div>
        </div>

        {/* Copyright Section (Footer Bottom) */}
        <div className="text-center pt-6">
          <p className="text-xs opacity-70">
            &copy; {currentYear} **Technoret BD**. All Rights Reserved.
          </p>
          <p className="text-xs opacity-50 mt-1">
            Developed with ❤️ for a better e-commerce experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
