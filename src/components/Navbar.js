import React from "react";
import Logo from "../img/Logo2.png";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={Logo} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
