import React from 'react';
import { Link } from 'react-router-dom';
import "../css/About.css"

function About() {
  return (
    <div className="sub_page">

      {/* Hero Section */}
      <div className="hero_area">
        <div className="bg-box">
          <img src="images/hero-bg.jpg" alt="Delicious Food Background" />
        </div>
      </div>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="NextBite Team" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Welcome to NextBite</h2>
                </div>
                <p>
                  At NextBite, we are dedicated to bringing you delicious, freshly prepared meals with the finest ingredients.
                  Whether you're grabbing a quick lunch or enjoying a relaxed dinner with friends, we're here to deliver an unforgettable culinary experience.
                  Our mission is simple: to create moments of joy with every bite.
                </p>
                <Link to="/aboutnextbite" className="btn btn-primary">
                  Discover More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
