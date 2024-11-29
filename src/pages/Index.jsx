import React, { Fragment } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <Fragment>
      <div>
        <Menu />
        <section
          className="welcome_area bg-img background-overlay"
          style={{ backgroundImage: "url(./assets/img/bg-img/bg-1.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="hero-content">
                  <h6>asoss</h6>
                  <h2>New Collection</h2>
                  <a href="#" className="btn essence-btn">
                    view collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Welcome Area End ##### */}
        {/* ##### Top Catagory Area Start ##### */}
        <div className="top_catagory_area section-padding-80 clearfix">
          <div className="container">
            <div className="row justify-content-center">
              {/* Single Catagory */}
              <div className="col-12 col-sm-6 col-md-4">
                <div
                  className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                  style={{
                    backgroundImage: "url(./assets/img/bg-img/bg-2.jpg)",
                  }}
                >
                  <div className="catagory-content">
                    <a href="#">Clothing</a>
                  </div>
                </div>
              </div>
              {/* Single Catagory */}
              <div className="col-12 col-sm-6 col-md-4">
                <div
                  className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                  style={{
                    backgroundImage: "url(./assets/img/bg-img/bg-3.jpg)",
                  }}
                >
                  <div className="catagory-content">
                    <a href="#">Shoes</a>
                  </div>
                </div>
              </div>
              {/* Single Catagory */}
              <div className="col-12 col-sm-6 col-md-4">
                <div
                  className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                  style={{
                    backgroundImage: "url(./assets/img/bg-img/bg-4.jpg)",
                  }}
                >
                  <div className="catagory-content">
                    <a href="#">Accessories</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Top Catagory Area End ##### */}
        {/* ##### CTA Area Start ##### */}
        <div className="cta-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="cta-content bg-img background-overlay"
                  style={{
                    backgroundImage: "url(./assets/img/bg-img/bg-5.jpg)",
                  }}
                >
                  <div className="h-100 d-flex align-items-center justify-content-end">
                    <div className="cta--text">
                      <h6>-60%</h6>
                      <h2>Global Sale</h2>
                      <a href="#" className="btn essence-btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### CTA Area End ##### */}
        {/* ##### New Arrivals Area Start ##### */}
        <section className="new_arrivals_area section-padding-80 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Popular Products</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="popular-products-slides owl-carousel">
                  {/* Single Product */}
                  <div className="single-product-wrapper">
                    {/* Product Image */}
                    <div className="product-img">
                      <img src="./assets/img/product-img/product-1.jpg" alt />
                      {/* Hover Thumb */}
                      <img
                        className="hover-img"
                        src="./assets/img/product-img/product-2.jpg"
                        alt
                      />
                      {/* Favourite */}
                      <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart" />
                      </div>
                    </div>
                    {/* Product Description */}
                    <div className="product-description">
                      <span>topshop</span>
                      <a href="single-product-details.html">
                        <h6>Knot Front Mini Dress</h6>
                      </a>
                      <p className="product-price">$80.00</p>
                      {/* Hover Content */}
                      <div className="hover-content">
                        {/* Add to Cart */}
                        <div className="add-to-cart-btn">
                          <a href="#" className="btn essence-btn">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Product */}
                  <div className="single-product-wrapper">
                    {/* Product Image */}
                    <div className="product-img">
                      <img src="./assets/img/product-img/product-2.jpg" alt />
                      {/* Hover Thumb */}
                      <img
                        className="hover-img"
                        src="./assets/img/product-img/product-3.jpg"
                        alt
                      />
                      {/* Favourite */}
                      <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart" />
                      </div>
                    </div>
                    {/* Product Description */}
                    <div className="product-description">
                      <span>topshop</span>
                      <a href="single-product-details.html">
                        <h6>Poplin Displaced Wrap Dress</h6>
                      </a>
                      <p className="product-price">$80.00</p>
                      {/* Hover Content */}
                      <div className="hover-content">
                        {/* Add to Cart */}
                        <div className="add-to-cart-btn">
                          <a href="#" className="btn essence-btn">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Product */}
                  <div className="single-product-wrapper">
                    {/* Product Image */}
                    <div className="product-img">
                      <img src="./assets/img/product-img/product-3.jpg" alt />
                      {/* Hover Thumb */}
                      <img
                        className="hover-img"
                        src="./assets/img/product-img/product-4.jpg"
                        alt
                      />
                      {/* Product Badge */}
                      <div className="product-badge offer-badge">
                        <span>-30%</span>
                      </div>
                      {/* Favourite */}
                      <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart" />
                      </div>
                    </div>
                    {/* Product Description */}
                    <div className="product-description">
                      <span>mango</span>
                      <a href="single-product-details.html">
                        <h6>PETITE Crepe Wrap Mini Dress</h6>
                      </a>
                      <p className="product-price">
                        <span className="old-price">$75.00</span> $55.00
                      </p>
                      {/* Hover Content */}
                      <div className="hover-content">
                        {/* Add to Cart */}
                        <div className="add-to-cart-btn">
                          <a href="#" className="btn essence-btn">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Product */}
                  <div className="single-product-wrapper">
                    {/* Product Image */}
                    <div className="product-img">
                      <img src="./assets/img/product-img/product-4.jpg" alt />
                      {/* Hover Thumb */}
                      <img
                        className="hover-img"
                        src="img/product-img/product-5.jpg"
                        alt
                      />
                      {/* Product Badge */}
                      <div className="product-badge new-badge">
                        <span>New</span>
                      </div>
                      {/* Favourite */}
                      <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart" />
                      </div>
                    </div>
                    {/* Product Description */}
                    <div className="product-description">
                      <span>mango</span>
                      <a href="single-product-details.html">
                        <h6>PETITE Belted Jumper Dress</h6>
                      </a>
                      <p className="product-price">$80.00</p>
                      {/* Hover Content */}
                      <div className="hover-content">
                        {/* Add to Cart */}
                        <div className="add-to-cart-btn">
                          <a href="#" className="btn essence-btn">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### New Arrivals Area End ##### */}
        {/* ##### Brands Area Start ##### */}
        <div className="brands-area d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand1.png" alt />
          </div>
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand2.png" alt />
          </div>
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand3.png" alt />
          </div>
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand4.png" alt />
          </div>
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand5.png" alt />
          </div>
          {/* Brand Logo */}
          <div className="single-brands-logo">
            <img src="./assets/img/core-img/brand6.png" alt />
          </div>
        </div>
        {/* ##### Brands Area End ##### */}
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
                        <Link to={"/shop"}>Shop</Link>
                      </li>
                      <li>
                        <Link to={"/blog"}>Blog</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
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
      </div>
    </Fragment>
  );
};

export default Index;
