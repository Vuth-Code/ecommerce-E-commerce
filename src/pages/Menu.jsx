import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Fragment>
      <header className="header_area">
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          {/* Classy Menu */}
          <nav className="classy-navbar" id="essenceNav">
            {/* Logo */}
            <a className="nav-brand" href="">
              <Link to={"/"}></Link>
              <img src="./assets/img/core-img/logo.png" alt />
            </a>
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
                          <a href="shop.html">Polo</a>
                        </li>
                        <li>
                          <a href="shop.html">Shirts</a>
                        </li>
                        <li>
                          <a href="shop.html">Jackets</a>
                        </li>
                        <li>
                          <a href="shop.html">Trench</a>
                        </li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Kid's Collection</li>
                        <li>
                          <a href="shop.html">Dresses</a>
                        </li>
                        <li>
                          <a href="shop.html">Shirts</a>
                        </li>
                        <li>
                          <a href="shop.html">T-shirts</a>
                        </li>
                        <li>
                          <a href="shop.html">Jackets</a>
                        </li>
                        <li>
                          <a href="shop.html">Trench</a>
                        </li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <img src="./assets/img/bg-img/bg-6.jpg" alt />
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
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
                        <a href="single-blog.html">Single Blog</a>
                      </li>
                      <li>
                        <a href="regular-page.html">Regular Page</a>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                    </ul>
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
          <div className="header-meta d-flex clearfix justify-content-end">
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
            <div className="favourite-area">
              <a href="#">
                <img src="./assets/img/core-img/heart.svg" alt />
              </a>
            </div>
            {/* User Login Info */}
            <div className="user-login-info">
              <a href="#">
                <img src="./assets/img/core-img/user.svg" alt />
              </a>
            </div>
            {/* Cart Area */}
            <div className="cart-area">
              <a href="#" id="essenceCartBtn">
                <img src="./assets/img/core-img/bag.svg" alt /> <span>3</span>
              </a>
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
          <a href="#" id="rightSideCart">
            <img src="./assets/img/core-img/bag.svg" alt /> <span>3</span>
          </a>
        </div>
        <div className="cart-content d-flex">
          {/* Cart List Area */}
          <div className="cart-list">
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="./assets/img/product-img/product-1.jpg"
                  className="cart-thumb"
                  alt
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="./assets/img/product-img/product-2.jpg"
                  className="cart-thumb"
                  alt
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
            {/* Single Cart Item */}
            <div className="single-cart-item">
              <a href="#" className="product-image">
                <img
                  src="./assets/img/product-img/product-3.jpg"
                  className="cart-thumb"
                  alt
                />
                {/* Cart Item Desc */}
                <div className="cart-item-desc">
                  <span className="product-remove">
                    <i className="fa fa-close" aria-hidden="true" />
                  </span>
                  <span className="badge">Mango</span>
                  <h6>Button Through Strap Mini Dress</h6>
                  <p className="size">Size: S</p>
                  <p className="color">Color: Red</p>
                  <p className="price">$45.00</p>
                </div>
              </a>
            </div>
          </div>
          {/* Cart Summary */}
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>$274.00</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              <li>
                <span>discount:</span> <span>-15%</span>
              </li>
              <li>
                <span>total:</span> <span>$232.00</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="checkout.html" className="btn essence-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
