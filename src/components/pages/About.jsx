import React from 'react';
import { Link } from 'react-router-dom';
import "../css/About.css";

function About() {
  return (
    <div className="sub_page">
      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Box */}
            <div className="col-lg-6">
              <div className="img-box">
                <img
                  src="images/about-img.png"
                  alt="NextBite Team"
                  className="img-fluid rounded"
                />
              </div>
            </div>

            {/* Content Box */}
            <div className="col-lg-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2 className="highlight">Welcome to NextBite</h2>
                </div>
                <p>
                  At NextBite, we bring you freshly prepared meals made with the
                  finest ingredients. From quick lunches to relaxed dinners,
                  every bite is crafted to create unforgettable moments.
                </p>
                <p>
                  Our mission is simple: to bring joy to your table with
                  flavors that make every meal memorable.
                </p>
                <Link
                  to="/aboutnextbite"
                  className="btn1 mt-3"
                >
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
