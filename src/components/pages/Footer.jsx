import React from 'react';
import "../css/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:nextbite@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>nextbite@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <Link to="/" className="footer-logo">
                NextBite
              </Link>
              <p className="footer-description">
                "NextBite is more than just a meal – it’s about creating memorable moments with great food and excellent service."
              </p>
              <div className="footer_social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="footer-info text-center">
          <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By
          <Link to="/" target="_blank" rel="noopener noreferrer">NextBite</Link><br />
          <span id="displayYear">{new Date().getFullYear()}</span> Distributed By
          <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">sense zee</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
