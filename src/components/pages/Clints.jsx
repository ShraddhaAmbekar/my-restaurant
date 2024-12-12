import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "../css/Client.css"

// Testimonial data array
const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    image: "images/client1.jpg",
    text: "NextBite has made dining at home so much more enjoyable. The food is fresh, tasty, and delivered right to my doorstep on time. I’ve tried several dishes, and each one has been better than the last. Highly recommend it!"
  },
  {
    name: "Priya Desai",
    location: "Bangalore, India",
    image: "images/client2.jpg",
    text: "The variety of food offered by NextBite is fantastic! From comfort food to exotic dishes, they have something for every craving. The delivery is prompt, and the quality is top-notch. Will definitely be ordering again."
  },
  {
    name: "Sandeep Singh",
    location: "Delhi, India",
    image: "images/client3.jpeg",
    text: "I ordered food for a family gathering, and everyone was impressed! The food was warm, flavorful, and delicious. NextBite’s service is quick, and they are always on time. I will keep recommending them to all my friends."
  },
  {
    name: "Anjali Sharma",
    location: "Hyderabad, India",
    image: "images/client4.jpeg",
    text: "NextBite is my go-to when I want tasty food delivered quickly. The food is always fresh, and they have great options for vegetarians like me. I also love the ease of ordering from their app. 10/10 service!"
  },


];

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
            <Carousel.Item key={index}>
              <div className="row">
                {group.map((testimonial, subIndex) => (
                  <div className="col-md-6 mb-4" key={subIndex}>
                    <div className="box">
                      <div className="detail-box d-flex">
                        <div className=" img-box">
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
