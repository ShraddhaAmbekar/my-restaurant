import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is used
import "../css/Carousel.css";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "Savor Every Bite",
      description: "Delight in the finest dishes crafted with passion and precision.",
      buttonText: "Explore Menu",
      imageUrl: "images/slide1.jpeg",
    },
    {
      id: 2,
      title: "Fresh Ingredients, Amazing Taste",
      description: "Every dish tells a story of flavor, freshness, and tradition.",
      buttonText: "Order Now",
      imageUrl: "images/slide2.jpeg", 
    },
    {
      id: 3,
      title: "Delivered to Your Doorstep",
      description: "From our kitchen to your table, enjoy the convenience of delivery.",
      buttonText: "Order Now",
      imageUrl: "images/slide3.jpeg", 
    },
  ];

  return (
    <section className="hero-carousel">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="carousel-overlay">
                <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
                  <h1 className="display-4 fw-bold">{slide.title}</h1>
                  <p className="lead">{slide.description}</p>
                  <Link to="/menu" className="btn mt-4">
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
