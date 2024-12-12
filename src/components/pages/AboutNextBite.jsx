import React from "react";
import "../css/AboutNextBite.css"

const AboutNextbite = () => {
  return (
    <div className="aboutnextbite-section">
      <div className="container">
        <h1 className="aboutnextbite-title">About Us</h1>
        <p className="aboutnextbite-description">
          Welcome to <strong>Nextbite</strong>! We are passionate about providing
          our customers with delicious, high-quality food and an exceptional
          dining experience. Our journey began with a simple mission: to bring
          people together over great food.
        </p>

        <div className="aboutnextbite-content">
          <div className="aboutnextbite-image">
            <img
              src="./images/aboutnextbite.jpg"// Replace with your actual image path
              alt="About Nextbite"
              className="img-fluid"
            />
          </div>
          <div className="aboutnextbite-details">
            <h2>Our Story</h2>
            <p>
              Nextbite started as a small family-owned restaurant, and over the
              years, we have grown into a community favorite. Our team is
              dedicated to sourcing fresh, locally-sourced ingredients and
              creating dishes that not only taste amazing but also tell a story
              of culinary excellence.
            </p>

            <h2>Our Vision</h2>
            <p>
              To be the go-to destination for food lovers, where every bite is a
              celebration of flavor and creativity. We aim to create lasting
              memories for every customer who walks through our doors.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>Quality: Only the best ingredients and recipes.</li>
              <li>Innovation: Constantly exploring new ideas and flavors.</li>
              <li>Community: Supporting local farmers and businesses.</li>
              <li>Passion: Bringing love and dedication to every dish.</li>
            </ul>
          </div>
        </div>

        <div className="aboutnextbite-footer">
          <h3>Thank You for Choosing Nextbite!</h3>
          <p>
            We look forward to serving you and making your dining experience
            truly unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNextbite;
