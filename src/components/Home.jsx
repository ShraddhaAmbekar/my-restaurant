import React from 'react';
import Menu from './Menu'; // Make sure to have this component
import Book from './Book'; // Make sure to have this component
import About from './About'; // Make sure to have this component
import Carousel from './Carousel'; // Make sure to have this component
import OfferSection from './Offer';
import ClientSection from './Clints';


const Home = () => {
  return (
    <div>
      {/* Hero Area with Carousel */}
      <div className="hero_area">
        <Carousel />
      </div>

      {/* Background Image */}
      <div className="bg-box">
        <img src="images/hero-bg.jpg" alt="Hero Background" />
      </div>

      {/* Offer Section */}
      <OfferSection/>

      {/* Menu Section */}
      <Menu />

      {/* About Section */}
      <About />

      {/* Book Section */}
      <Book />

      {/* Client Testimonial Section */}
      <ClientSection/>
    </div>
  );
};

export default Home;
