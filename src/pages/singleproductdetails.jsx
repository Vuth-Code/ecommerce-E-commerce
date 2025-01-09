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
    </Fragment>
  );
};

export default singleproductdetails;
