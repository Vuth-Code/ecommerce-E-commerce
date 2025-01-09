import React, { Fragment, useEffect } from "react";
import Menu from "./Menu";
const contact = () => {
  return (
    <Fragment>
      <div>
        <div className="contact-area d-flex align-items-center">
          <div className="google-map">
            <div id="googleMap" />
          </div>
          <div className="contact-info">
            <h2>How to Find Us</h2>
            <p>
              Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
              ante. Aenean finibus velit id urna vehicula, nec maximus est
              sollicitudin.
            </p>
            <div className="contact-address mt-50">
              <p>
                <span>address:</span> Phnom Penh
              </p>
              <p>
                <span>telephone:</span> +885 61764600
              </p>
              <p>
                <a href="mailto:contact@essence.com">contact@essence.com</a>
              </p>
            </div>
          </div>
        </div>
        {/* ##### Footer Area Start ##### */}
      </div>
    </Fragment>
  );
};

export default contact;
