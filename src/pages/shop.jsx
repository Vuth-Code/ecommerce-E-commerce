import React, { Fragment, useContext, useState } from "react";
import Menu from "./Menu";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Shop = () => {
  const { products } = useContext(ProductContext);

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
                  <h2>Men's Clothing</h2>
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
              {/* Sidebar */}
              <div className="col-12 col-md-4 col-lg-3">
                <div className="shop_sidebar_area">
                  {/* Sidebar content here */}
                  <div class="widget catagory mb-50">
                    <div>
                      {/* Widget Title */}
                      <h6 className="widget-title mb-30">Catagories</h6>
                      {/*  Catagories  */}
                      <button></button>
                    </div>
                  </div>
                </div>
                <div>
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
                          <a href="#">jewelery</a>
                        </li>
                        <li>
                          <a href="#">men's clothing</a>
                        </li>
                        <li>
                          <a href="#">electronics</a>
                        </li>
                        <li>
                          <a href="#">women's clothing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Products Grid */}
              <div className="col-12 col-md-8 col-lg-9">
                <div className="shop_grid_product_area">
                  <div className="row">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <div
                          className="col-12 col-sm-6 col-lg-4"
                          key={product.id}
                        >
                          <Product product={product} />
                        </div>
                      ))
                    ) : (
                      <p className="text-center w-100">
                        No products found in this category.
                      </p>
                    )}
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
      </div>
    </Fragment>
  );
};

export default Shop;
