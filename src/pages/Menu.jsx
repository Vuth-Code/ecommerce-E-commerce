import React, { Fragment, useContext, useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
//import conponents
import CartItem from "../components/CartItem";
//import sidebar contect
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Menu = () => {
  const { isOpen, handleClose, setIsOpen } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <Fragment>
      <header className="header_area ">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <Link to={"/"}>
              <a className="nav-brand" href="">
                <img src="./assets/img/core-img/logo.png" alt />
              </a>
            </Link>
            {/* Navbar Toggler */}
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span />
                <span />
              </span>
            </div>
            {/* Menu */}
            <div className="classy-menu">
              {/* close btn */}
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top" />
                  <span className="bottom" />
                </div>
              </div>
              {/* Nav Start */}
              <div className="classynav">
                <ul>
                  <li>
                    <Link to="/shop">Shop</Link>
                    <div className="megamenu">
                      <ul className="single-mega cn-col-4">
                        <li className="title">Women's Collection</li>
                        <li>
                          {/* <a href="shop.html">Dresses</a> */}
                          <Link to="/shop">Dresses</Link>
                        </li>
                        <li>
                          {/* <a href="shop.html">Blouses &amp; Shirts</a> */}
                          <Link to="/shop">Blouses &amp; Shirts</Link>
                        </li>
                        <li>
                          <Link to="/shop">T-shirts</Link>
                          {/* <a href="shop.html">T-shirts</a> */}
                        </li>
                        <li>
                          {/* <a href="shop.html">Rompers</a> */}
                          <Link to="/shop">Rompers</Link>
                        </li>
                        <li>
                          <Link to="/shop">Bras &amp; Panties</Link>
                          {/* <a href="shop.html">Bras &amp; Panties</a> */}
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Men's Collection</li>
                        <li>
                          {/* <a href="shop.html">T-Shirts</a> */}
                          <Link to={"/shop"}>T-Shirts</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Polo</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Shirts</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Jackets</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Trench</Link>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Kid's Collection</li>
                        <li>
                          <Link href="shop.html">Dresses</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Shirts</Link>
                        </li>
                        <li>
                          <Link href="shop.html">T-shirts</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Jackets</Link>
                        </li>
                        <li>
                          <Link href="shop.html">Trench</Link>
                        </li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <img src="./assets/img/bg-img/bg-6.jpg" alt />
                      </div>
                    </div>
                  </li>
                  <li>
                    {/* <Link>Pages</Link> */}
                    <Link to={"/"}>Home</Link>
                    {/* <ul className="dropdown ">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/shop"}>Shop</Link>
                      </li>
                      <li>
                        <Link to={"/singleProductDetails"}>
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link to={"/checkout"}>Checkout</Link>
                      </li>
                      <li>
                        <Link to={"/Blog"}>Blog</Link>
                      </li>
                      <li>
                        <Link href="single-blog.html">Single Blog</Link>
                      </li>
                      <li>
                        <Link href="regular-page.html">Regular Page</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to={"/Blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav End */}
            </div>
          </nav>
          {/* Header Meta Data */}
          <div className="header-meta d-flex clearfix justify-content-end relative">
            {/* Search Area */}
            <div className="search-area">
              <form action="#" method="post">
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Type for search"
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
            {/* Favourite Area */}
            <div className="favourite-area relative">
              <Link>
                <img
                  className="absolute top-[35px] right-[35px] "
                  src="./assets/img/core-img/heart.svg"
                  alt
                />
              </Link>
            </div>
            {/* User Login Info */}
            <div className="user-login-info relative">
              <Link>
                <img
                  className="absolute top-[35px] right-[35px]"
                  src="./assets/img/core-img/user.svg"
                  alt
                />
              </Link>
            </div>
            {/* Cart Area */}
            <div className="cart-area relative">
              <Link onClick={() => setIsOpen(!isOpen)} id="essenceCartBtn ">
                <img
                  className="absolute top-[35px] right-[35px]"
                  src="./assets/img/core-img/bag.svg"
                  alt
                />
                <span className="ml-2">{itemAmount}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* ##### Header Area End ##### */}
      {/* ##### Right Side Cart Area ##### */}
      <div className="cart-bg-overlay" />
      <div className="right-side-cart-area">
        {/* Cart Button */}
        <div className="cart-button">
          <Link id="rightSideCart">
            <img src="./assets/img/core-img/bag.svg" alt />
          </Link>
        </div>
        <div className="cart-content d-flex">
          {/* Cart List Area */}
          <div className="cart-list">
            <div className="single-cart-item">
              <Link className="product-image">
                <img
                  src="./assets/img/product-img/product-2.jpg"
                  className="cart-thumb"
                  alt
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
