import React, { Fragment } from "react";
import Menu from "./Menu";
const singleproductdetails = () => {
  return (
    <Fragment>
      <Menu />
      <section className="single_product_details_area d-flex align-items-center">
        {/* Single Product Thumb */}
        <div className="single_product_thumb clearfix">
          <div className="product_thumbnail_slides owl-carousel">
            <img src="./assets/img/product-img/product-big-1.jpg" alt />
            <img src="./assets/img/product-img/product-big-2.jpg" alt />
            <img src="./assets/img/product-img/product-big-3.jpg" alt />
          </div>
        </div>
        {/* Single Product Description */}
        <div className="single_product_desc clearfix">
          <span>mango</span>
          <a href="cart.html">
            <h2>One Shoulder Glitter Midi Dress</h2>
          </a>
          <p className="product-price">
            <span className="old-price">$65.00</span> $49.00
          </p>
          <p className="product-desc">
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
            ante. Aenean finibus velit id urna vehicula, nec maximus est
            sollicitudin.
          </p>
          {/* Form */}
          <form className="cart-form clearfix" method="post">
            {/* Select Box */}
            <div className="select-box d-flex mt-50 mb-30">
              <select name="select" id="productSize" className="mr-5">
                <option value="value">Size: XL</option>
                <option value="value">Size: X</option>
                <option value="value">Size: M</option>
                <option value="value">Size: S</option>
              </select>
              <select name="select" id="productColor">
                <option value="value">Color: Black</option>
                <option value="value">Color: White</option>
                <option value="value">Color: Red</option>
                <option value="value">Color: Purple</option>
              </select>
            </div>
            {/* Cart & Favourite Box */}
            <div className="cart-fav-box d-flex align-items-center">
              {/* Cart */}
              <button
                type="submit"
                name="addtocart"
                value={5}
                className="btn essence-btn"
              >
                Add to cart
              </button>
              {/* Favourite */}
              <div className="product-favourite ml-4">
                <a href="#" className="favme fa fa-heart" />
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* ##### Single Product Details Area End ##### */}
      {/* ##### Footer Area Start ##### */}
      <footer className="footer_area clearfix">
        <div className="container">
          <div className="row">
            {/* Single Widget Area */}
            <div className="col-12 col-md-6">
              <div className="single_widget_area d-flex mb-30">
                {/* Logo */}
                <div className="footer-logo mr-50">
                  <a href="#">
                    <img src="./assets/img/core-img/logo2.png" alt />
                  </a>
                </div>
                {/* Footer Menu */}
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Single Widget Area */}
            <div className="col-12 col-md-6">
              <div className="single_widget_area mb-30">
                <ul className="footer_widget_menu">
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Payment Options</a>
                  </li>
                  <li>
                    <a href="#">Shipping and Delivery</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            {/* Single Widget Area */}
            <div className="col-12 col-md-6">
              <div className="single_widget_area">
                <div className="footer_heading mb-30">
                  <h6>Subscribe</h6>
                </div>
                <div className="subscribtion_form">
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="mail"
                      className="mail"
                      placeholder="Your email here"
                    />
                    <button type="submit" className="submit">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Single Widget Area */}
            <div className="col-12 col-md-6">
              <div className="single_widget_area">
                <div className="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Pinterest"
                  >
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Youtube"
                  >
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | Made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                , distributed by{" "}
                <a href="https://themewagon.com/" target="_blank">
                  ThemeWagon
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default singleproductdetails;
