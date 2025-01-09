import React, { useState } from "react";
import { Link } from "react-router-dom";
const Pages = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="menu">
        <li
          className="menu-item dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            Pages
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/singleProductDetails">Product Details</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/single-blog">Single Blog</Link>
              </li>
              <li>
                <Link to="/regular-page">Regular Page</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pages;
