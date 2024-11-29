import React, { Fragment } from "react";
import Menu from "./Menu";
const shop = () => {
  return (
    <Fragment>
      <div>
        <Menu />
        {/* ##### Breadcumb Area Start ##### */}
        <div
          className="breadcumb_area bg-img"
          style={{ backgroundImage: "url(./assets/img/bg-img/breadcumb.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="page-title text-center">
                  <h2>dresses</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Shop Grid Area Start ##### */}
        <section className="shop_grid_area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="shop_sidebar_area">
                  {/* ##### Single Widget ##### */}
                  <div className="widget catagory mb-50">
                    {/* Widget Title */}
                    <h6 className="widget-title mb-30">Catagories</h6>
                    {/*  Catagories  */}
                    <div className="catagories-menu">
                      <ul
                        id="menu-content2"
                        className="menu-content collapse show"
                      >
                        {/* Single Item */}
                        <li data-toggle="collapse" data-target="#clothing">
                          <a href="#">clothing</a>
                          <ul className="sub-menu collapse show" id="clothing">
                            <li>
                              <a href="#">All</a>
                            </li>
                            <li>
                              <a href="#">Bodysuits</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Hoodies &amp; Sweats</a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Coats</a>
                            </li>
                            <li>
                              <a href="#">Jeans</a>
                            </li>
                            <li>
                              <a href="#">Pants &amp; Leggings</a>
                            </li>
                            <li>
                              <a href="#">Rompers &amp; Jumpsuits</a>
                            </li>
                            <li>
                              <a href="#">Shirts &amp; Blouses</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Sweaters &amp; Knits</a>
                            </li>
                          </ul>
                        </li>
                        {/* Single Item */}
                        <li
                          data-toggle="collapse"
                          data-target="#shoes"
                          className="collapsed"
                        >
                          <a href="#">shoes</a>
                          <ul className="sub-menu collapse" id="shoes">
                            <li>
                              <a href="#">All</a>
                            </li>
                            <li>
                              <a href="#">Bodysuits</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Hoodies &amp; Sweats</a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Coats</a>
                            </li>
                            <li>
                              <a href="#">Jeans</a>
                            </li>
                            <li>
                              <a href="#">Pants &amp; Leggings</a>
                            </li>
                            <li>
                              <a href="#">Rompers &amp; Jumpsuits</a>
                            </li>
                            <li>
                              <a href="#">Shirts &amp; Blouses</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Sweaters &amp; Knits</a>
                            </li>
                          </ul>
                        </li>
                        {/* Single Item */}
                        <li
                          data-toggle="collapse"
                          data-target="#accessories"
                          className="collapsed"
                        >
                          <a href="#">accessories</a>
                          <ul className="sub-menu collapse" id="accessories">
                            <li>
                              <a href="#">All</a>
                            </li>
                            <li>
                              <a href="#">Bodysuits</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Hoodies &amp; Sweats</a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Coats</a>
                            </li>
                            <li>
                              <a href="#">Jeans</a>
                            </li>
                            <li>
                              <a href="#">Pants &amp; Leggings</a>
                            </li>
                            <li>
                              <a href="#">Rompers &amp; Jumpsuits</a>
                            </li>
                            <li>
                              <a href="#">Shirts &amp; Blouses</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Sweaters &amp; Knits</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* ##### Single Widget ##### */}
                  <div className="widget price mb-50">
                    {/* Widget Title */}
                    <h6 className="widget-title mb-30">Filter by</h6>
                    {/* Widget Title 2 */}
                    <p className="widget-title2 mb-30">Price</p>
                    <div className="widget-desc">
                      <div className="slider-range">
                        <div
                          data-min={49}
                          data-max={360}
                          data-unit="$"
                          className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          data-value-min={49}
                          data-value-max={360}
                          data-label-result="Range:"
                        >
                          <div className="ui-slider-range ui-widget-header ui-corner-all" />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                        </div>
                        <div className="range-price">
                          Range: $49.00 - $360.00
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ##### Single Widget ##### */}
                  <div className="widget color mb-50">
                    {/* Widget Title 2 */}
                    <p className="widget-title2 mb-30">Color</p>
                    <div className="widget-desc">
                      <ul className="d-flex">
                        <li>
                          <a href="#" className="color1" />
                        </li>
                        <li>
                          <a href="#" className="color2" />
                        </li>
                        <li>
                          <a href="#" className="color3" />
                        </li>
                        <li>
                          <a href="#" className="color4" />
                        </li>
                        <li>
                          <a href="#" className="color5" />
                        </li>
                        <li>
                          <a href="#" className="color6" />
                        </li>
                        <li>
                          <a href="#" className="color7" />
                        </li>
                        <li>
                          <a href="#" className="color8" />
                        </li>
                        <li>
                          <a href="#" className="color9" />
                        </li>
                        <li>
                          <a href="#" className="color10" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* ##### Single Widget ##### */}
                  <div className="widget brands mb-50">
                    {/* Widget Title 2 */}
                    <p className="widget-title2 mb-30">Brands</p>
                    <div className="widget-desc">
                      <ul>
                        <li>
                          <a href="#">Asos</a>
                        </li>
                        <li>
                          <a href="#">Mango</a>
                        </li>
                        <li>
                          <a href="#">River Island</a>
                        </li>
                        <li>
                          <a href="#">Topshop</a>
                        </li>
                        <li>
                          <a href="#">Zara</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-9">
                <div className="shop_grid_product_area">
                  <div className="row">
                    <div className="col-12">
                      <div className="product-topbar d-flex align-items-center justify-content-between">
                        {/* Total Products */}
                        <div className="total-products">
                          <p>
                            <span>186</span> products found
                          </p>
                        </div>
                        {/* Sorting */}
                        <div className="product-sorting d-flex">
                          <p>Sort by:</p>
                          <form action="#" method="get">
                            <select name="select" id="sortByselect">
                              <option value="value">Highest Rated</option>
                              <option value="value">Newest</option>
                              <option value="value">Price: $$ - $</option>
                              <option value="value">Price: $ - $$</option>
                            </select>
                            <input
                              type="submit"
                              className="d-none"
                              defaultValue
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-1.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-2.jpg"
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
                          <span>topshop</span>
                          <a href="single-product-details.html">
                            <h6>Knot Front Mini Dress</h6>
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-2.jpg"
                            alt
                          />
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-3.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-4.jpg"
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-4.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-5.jpg"
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-5.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-6.jpg"
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
                          <span>topshop</span>
                          <a href="single-product-details.html">
                            <h6>Knot Front Mini Dress</h6>
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-6.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-7.jpg"
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-7.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-8.jpg"
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-8.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-9.jpg"
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
                    </div>
                    {/* Single Product */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-wrapper">
                        {/* Product Image */}
                        <div className="product-img">
                          <img
                            src="./assets/img/product-img/product-9.jpg"
                            alt
                          />
                          {/* Hover Thumb */}
                          <img
                            className="hover-img"
                            src="./assets/img/product-img/product-1.jpg"
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
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <nav aria-label="navigation">
                  <ul className="pagination mt-50 mb-70">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa fa-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        21
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Shop Grid Area End ##### */}
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
        {/* ##### Footer Area End ##### */}
      </div>
    </Fragment>
  );
};

export default shop;
