import React, { Fragment } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const singleblog = () => {
  return (
    <Fragment>
      <div>
        <Menu />
        <div className="single-blog-wrapper">
          {/* Single Blog Post Thumb */}
          <div className="single-blog-post-thumb">
            <img src="./assets/img/bg-img/bg-7.jpg" alt />
          </div>
          {/* Single Blog Content Wrap */}
          <div className="single-blog-content-wrapper d-flex">
            {/* Blog Content */}
            <div className="single-blog--text">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis perferendis rem accusantium ducimus animi nesciunt
                expedita omnis aut quas molestias!
              </h2>
              <p>
                Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
                ante. Aenean finibus velit id urna vehicula, nec maximus est
                sollicitudin. Praesent at tempus lectus, eleifend blandit felis.
                Fusce augue arcu, consequat a nisl aliquet, consectetur
                elementum turpis. Donec iaculis lobortis nisl, et viverra risus
                imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
                arcu a magna sodales venenatis. Integer non diam sit amet magna
                luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.
              </p>
              <blockquote>
                <h6>
                  <i className="fa fa-quote-left" aria-hidden="true" /> Quisque
                  sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et
                  sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt,
                  dolor nibh lacinia lacus.
                </h6>
                <span>Liam Neeson</span>
              </blockquote>
              <p>
                Praesent ac magna sed massa euismod congue vitae vitae risus.
                Nulla lorem augue, mollis non est et, eleifend elementum ante.
                Nunc id pharetra magna. Praesent vel orci ornare, blandit mi
                sed, aliquet nisi. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
            {/* Related Blog Post */}
            <div className="related-blog-post">
              {/* Single Related Blog Post */}
              <div className="single-related-blog-post">
                <img src="./assets/img/bg-img/rp1.jpg" alt />
                <a href="#">
                  <h5>
                    Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed
                    ullamcorper massa
                  </h5>
                </a>
              </div>
              {/* Single Related Blog Post */}
              <div className="single-related-blog-post">
                <img src="./assets/img/bg-img/rp2.jpg" alt />
                <a href="#">
                  <h5>
                    Fusce tincidunt nulla magna, ac euismod quam viverra id.
                    Fusce eget metus feugiat
                  </h5>
                </a>
              </div>
              {/* Single Related Blog Post */}
              <div className="single-related-blog-post">
                <img src="./assets/img/bg-img/rp3.jpg" alt />
                <a href="#">
                  <h5>
                    Etiam leo nibh, consectetur nec orci et, tempus tempus ex
                  </h5>
                </a>
              </div>
              {/* Single Related Blog Post */}
              <div className="single-related-blog-post">
                <img src="./assets/img/bg-img/rp4.jpg" alt />
                <a href="#">
                  <h5>
                    Sed viverra pellentesque dictum. Aenean ligula justo,
                    viverra in lacus porttitor
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Blog Wrapper Area End ##### */}
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

export default singleblog;
