import React from 'react';
import { Link } from 'react-router';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "Savor Every Bite",
description: "Experience the finest dishes crafted with fresh ingredients, bursting with flavors that tell a story of tradition and taste.",
      buttonText: "Order Now",
    },
    {
      id: 2,
      title: "Your Favorite Meals, Delivered",
description: "From sizzling burgers to cheesy pizzas, enjoy your cravings delivered hot and fresh, straight to your doorstep.",
      buttonText: "Order Now",
    },
    {
      id: 3,
      title: "Fast Food Restaurant",
      description: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.",
      buttonText: "Order Now",
    },
  ];

  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="btn-box">
                        <Link to="/menu" className="btn1">{slide.buttonText}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                data-bs-target="#customCarousel1"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
              ></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
