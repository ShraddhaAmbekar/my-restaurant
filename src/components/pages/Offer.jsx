import React from "react";
import "../css/Offer.css";
import { Link } from "react-router-dom";

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      title: "Tasty Thursdays",
      discount: "20%",
      imgSrc: "images/o1.jpg",
      buttonText: "Order Now",
    },
    {
      id: 2,
      title: "Pizza Days",
      discount: "15%",
      imgSrc: "images/o2.jpg",
      buttonText: "Order Now",
    },
    {
      id: 3,
      title: "Weekend Delights",
      discount: "25%",
      imgSrc: "images/o3.jpg",
      buttonText: "Order Now",
    },
  
  ];

  return (
    <section className="offer_section">
      <div className="offer_container">
        {offers.map((offer) => (
          <div key={offer.id} className="box">
            <div className="img-box">
              <img src={offer.imgSrc} alt={offer.title} />
            </div>
            <div className="detail-box">
              <h5>{offer.title}</h5>
              <h6>
                <span>{offer.discount}</span> Off
              </h6>
              <Link to="/menu">{offer.buttonText}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
