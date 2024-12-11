import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";  // Importing Bootstrap's Carousel

const ClientSection = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb-45">
          <h2>What Says Our Customers</h2>
        </div>

        {/* Bootstrap Carousel */}
        <Carousel interval={5000} indicators={false} controls={true} className="carousel-container">
          {/* Testimonial 1 */}
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="box">
                  <div className="detail-box d-flex">
                    <div className="client-img-wrapper">
                      <img src="images/client1.jpg" alt="Customer 1" className="box-img" />
                    </div>
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <h6>Moana Michell</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col-md-6 mb-4">
                <div className="box">
                  <div className="detail-box d-flex">
                    <div className="client-img-wrapper">
                      <img src="images/client2.jpg" alt="Customer 2" className="box-img" />
                    </div>
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <h6>Mike Hamell</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Testimonial 3 */}
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="box">
                  <div className="detail-box d-flex">
                    <div className="client-img-wrapper">
                      <img src="images/client3.jpg" alt="Customer 3" className="box-img" />
                    </div>
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <h6>Susan Lively</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="col-md-6 mb-4">
                <div className="box">
                  <div className="detail-box d-flex">
                    <div className="client-img-wrapper">
                      <img src="images/client4.jpg" alt="Customer 4" className="box-img" />
                    </div>
                    <div className="testimonial-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <h6>David Lee</h6>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientSection;
