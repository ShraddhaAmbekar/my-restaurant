import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItemDetail = ({ onAddToCart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state; // The item data passed through navigation

  if (!item) {
    return (
      <div className="container">
        <h2>Item not found</h2>
        <button onClick={() => navigate("/menu")} className="btn btn-primary">
          Back to Menu
        </button>
      </div>
    );
  }

  

  return (
    <div className="container">
      <div className="item-detail">
        <div className="img-box">
          <img src={item.imgSrc} alt={item.name} />
        </div>
        <div className="detail-box">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <h4>Price: ₹{item.price}</h4>
          <div className="actions">
           
            <button className="btn btn-secondary" onClick={() => navigate("/menu")}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
