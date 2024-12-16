import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../css/Client.css";
import { testimonials } from "../data/Clientdata.js"; // Ensure the path is correct

const ClientSection = () => {
  // Group testimonials into pairs
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb-45">
          <h2>What Our Customers Say</h2>
        </div>

        {/* Bootstrap Carousel */}
        <Carousel interval={5000} indicators={false} controls={true} className="carousel-container">
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={`carousel-${index}`}>
              <div className="row">
                {group.map((testimonial, subIndex) => (
                  <div className="col-md-6 mb-4" key={`testimonial-${index}-${subIndex}`}>
                    <div className="box">
                      <div className="detail-box d-flex">
                        <div className="img-box">
                          <img
                            src={testimonial.image}
                            alt={`Customer ${index * 2 + subIndex + 1}`}
                            className="box-img"
                          />
                        </div>
                        <div className="testimonial-text">
                          <p>{testimonial.text}</p>
                          <h6>{testimonial.name}</h6>
                          <p>{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ClientSection;
