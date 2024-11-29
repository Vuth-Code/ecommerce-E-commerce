import React, { Fragment } from "react";
import Menu from "./Menu";
const checkout = () => {
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
                  <h2>Checkout</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcumb Area End ##### */}
        {/* ##### Checkout Area Start ##### */}
        <div className="checkout_area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="checkout_details_area mt-50 clearfix">
                  <div className="cart-page-heading mb-30">
                    <h5>Billing Address</h5>
                  </div>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="first_name">
                          First Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first_name"
                          defaultValue
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="last_name">
                          Last Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="last_name"
                          defaultValue
                          required
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="company">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="company"
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="country">
                          Country <span>*</span>
                        </label>
                        <select className="w-100" id="country">
                          <option value="usa">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="ger">Germany</option>
                          <option value="fra">France</option>
                          <option value="ind">India</option>
                          <option value="aus">Australia</option>
                          <option value="bra">Brazil</option>
                          <option value="cana">Canada</option>
                        </select>
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="street_address">
                          Address <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="street_address"
                          defaultValue
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="street_address2"
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="postcode">
                          Postcode <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="postcode"
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="city">
                          Town/City <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="state">
                          Province <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="phone_number">
                          Phone No <span>*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone_number"
                          min={0}
                          defaultValue
                        />
                      </div>
                      <div className="col-12 mb-4">
                        <label htmlFor="email_address">
                          Email Address <span>*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email_address"
                          defaultValue
                        />
                      </div>
                      <div className="col-12">
                        <div className="custom-control custom-checkbox d-block mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Terms and conitions
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-block mb-2">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck2"
                          >
                            Create an accout
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox d-block">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            Subscribe to our newsletter
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5 ml-lg-auto">
                <div className="order-details-confirmation">
                  <div className="cart-page-heading">
                    <h5>Your Order</h5>
                    <p>The Details</p>
                  </div>
                  <ul className="order-details-form mb-4">
                    <li>
                      <span>Product</span> <span>Total</span>
                    </li>
                    <li>
                      <span>Cocktail Yellow dress</span> <span>$59.90</span>
                    </li>
                    <li>
                      <span>Subtotal</span> <span>$59.90</span>
                    </li>
                    <li>
                      <span>Shipping</span> <span>Free</span>
                    </li>
                    <li>
                      <span>Total</span> <span>$59.90</span>
                    </li>
                  </ul>
                  <div id="accordion" role="tablist" className="mb-4">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h6 className="mb-0">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="fa fa-circle-o mr-3" />
                            Paypal
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin pharetra tempor so dales. Phasellus
                            sagittis auctor gravida. Integ er bibendum sodales
                            arcu id te mpus. Ut consectetur lacus.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo">
                        <h6 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="fa fa-circle-o mr-3" />
                            cash on delievery
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Explicabo quis in veritatis officia inventore,
                            tempore provident dignissimos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree">
                        <h6 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="fa fa-circle-o mr-3" />
                            credit card
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Esse quo sint repudiandae suscipit ab soluta
                            delectus voluptate, vero vitae
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingFour">
                        <h6 className="mb-0">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            <i className="fa fa-circle-o mr-3" />
                            direct bank transfer
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Est cum autem eveniet saepe fugit, impedit
                            magni.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn essence-btn">
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Checkout Area End ##### */}
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
      </div>
    </Fragment>
  );
};

export default checkout;
