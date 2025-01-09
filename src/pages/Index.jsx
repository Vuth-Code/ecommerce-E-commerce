import React, { Fragment, useContext } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
const Index = () => {
  const { products } = useContext(ProductContext);
  //get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  }, []);
  // Filter products based on categories (Men, Women, Accessories, Jewelry)
  const menProducts = products.filter(
    (product) => product.category === "men's clothing"
  );
  const womenProducts = products.filter(
    (product) => product.category === "women's clothing"
  );
  const accessoriesProducts = products.filter(
    (product) => product.category === "electronics"
  );
  const jeweleryProducts = products.filter(
    (product) => product.category === "jewelery"
  );

  return (
    <Fragment>
      <div>
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
        </section>
        {/* ##### New Arrivals Area End ##### */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </div>
        </section>
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
      </div>
    </Fragment>
  );
};

export default Index;
