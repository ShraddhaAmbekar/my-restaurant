import React from 'react';
import Menu from './Menu';
import Book from './Book';
import About from './About';
import Carousel from './Carousel';
import OfferSection from './Offer';
import ClientSection from './Clints';


const Home = () => {
  return (
    <div>
      <div className="hero_area">
        <Carousel />
      </div>
      
      <OfferSection />
      <Menu />
      <About />
      <Book />
      <ClientSection />
    </div>
  );
};

export default Home;
