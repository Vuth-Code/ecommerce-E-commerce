import React, { Fragment, useContext, useState } from "react";
import Menu from "./Menu";
import { CartContext } from "../contexts/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PayPalComponent from "../components/Paypal";
const Checkout = () => {
  const { total } = useContext(CartContext);
  const [method, setMethod] = useState("cod");

  //paypal
  const handleError = (err) => {
    toast.warning("An error occurred during the transaction.");
  };
  const handleApprove = (details) => {
    toast.success(`Transaction completed by ${details.payer.name.given_name}`);
  };
  return (
    <Fragment>
      <div>
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
                      <span>Subtotal</span>{" "}
                      <span>$ {parseFloat(total).toFixed(2)}</span>
                    </li>
                    <li>
                      <span>Shipping</span> <span>Free</span>
                    </li>
                    <li>
                      <span>Total</span>{" "}
                      <span>$ {parseFloat(total).toFixed(2)}</span>
                    </li>
                  </ul>
                  <div id="accordion" role="tablist" className="mb-4">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        {/* <h6 className="mb-0 flex justify-center items-center">
                          <a
                            className={` ${
                              method === "paypal"
                                ? "bg-light border-primary "
                                : ""
                            }`}
                            onClick={() => setMethod("paypal")}
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="fa fa-circle-o mr-3" />
                            Paypal
                          </a>
                          <img
                            className="w-[120px]"
                            src="./assets/img/PayPal.png"
                          />
                        </h6> */}
                        <div
                          className={`pm-item flex  items-center justify-start gap-[100px] ${
                            method === "paypal"
                              ? "bg-light border-primary "
                              : ""
                          }`}
                          onClick={() => setMethod("paypal")}
                        >
                          <input
                            type="radio"
                            name="pm"
                            id="one"
                            checked={method === "paypal"}
                            onChange={() => setMethod("paypal")}
                          />
                          <label htmlFor="one">Paypal</label>
                          <img className="w-28" src="./assets/img/PayPal.png" />
                        </div>
                        {/* cash */}
                        <div
                          className={`pm-item flex  items-center justify-start  gap-[50px] ${
                            method === "cod" ? "bg-light border-primary" : ""
                          }`}
                          onClick={() => setMethod("cod")}
                        >
                          <input
                            type="radio"
                            name="pm"
                            id="two"
                            checked={method === "cod"}
                            onChange={() => setMethod("cod")}
                          />
                          <label htmlFor="two">Cash on delievery</label>
                          <img
                            className="w-28 ms-10"
                            src="./assets/img/cash.png"
                            alt="CashOnDelivery"
                          />
                        </div>
                        {/* credit */}
                        <div
                          className={`pm-item flex  items-center justify-start  gap-[90px]  ${
                            method === "cod" ? "bg-light border-primary" : ""
                          }`}
                          onClick={() => setMethod("visa")}
                        >
                          <input
                            type="radio"
                            name="pm"
                            id="three"
                            checked={method === "visa"}
                            onChange={() => setMethod("visa")}
                          />
                          <label htmlFor="three">Credit card</label>
                          <img
                            className="w-28"
                            src="./assets/img/credit.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {method === "paypal" ? (
                        <PayPalComponent
                          total={total}
                          onApprove={handleApprove}
                          onError={handleError}
                        />
                      ) : (
                        <button className="site-btn btn-full btn essence-btn">
                          Place Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ##### Checkout Area End ##### */}
    </Fragment>
  );
};

export default Checkout;
