import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10" >
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Text */}
        <p className="text-lg font-semibold">ReduxShop &copy; {new Date().getFullYear()}</p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
