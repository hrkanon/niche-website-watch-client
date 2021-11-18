import React from "react";
import "./Footer.css";
import footerLogo from "../../images/logo/logo.png";

const Footer = () => {
  return (
    <div className="mt-5 py-4 footer text-white">
      <div className="container">
        <div className="text-center pt-3 mb-4">
          <img src={footerLogo} alt="" />
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <h4>CONTACT US</h4>
            <div>
              <p>
                <i class="fas fa-home"></i>
                520, West valey, Anim ad minim.
              </p>
              <p>
                <i class="fas fa-phone"></i>
                +000 123 456789.
              </p>
              <p>
                <i class="fas fa-envelope"></i>
                info@abc.com
              </p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <h4>About Us</h4>
            <p>Careers</p>
            <p>Services</p>
            <p>Our Blog</p>
          </div>
          <div className="col-md-3 col-6">
            <h4>SHARE WITH US</h4>
            <p>Special offers on social networks</p>
            <p>
              <i class="icon fab fa-twitter-square"></i>
              <i class="icon ms-1 fab fa-facebook-square"></i>
              <i class="icon ms-1 fab fa-google-plus-square"></i>
              <i class="icon ms-1 fab fa-instagram-square"></i>
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h4>NEWSLETTER</h4>
            <p>Subscribe our newsletter</p>
            <div className="subscribe-area">
              <input
                className="subscribe-input"
                type="text"
                placeholder="your email"
              />
              <i class="icon mail far fa-envelope"></i>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="text-center">
        <small>
          {" "}
          &copy; Copiright 2021 SwissEagle. All Rights Reserved developed by
          &copy;Habib
        </small>
      </div>
    </div>
  );
};

export default Footer;
