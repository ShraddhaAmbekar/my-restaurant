import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MenuItemDetail = () => {
  // Retrieve the state passed from the `Menu` component
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state; // This is where we get the item data

  // Set the initial state for quantity before any return
  const [quantity, setQuantity] = useState(1);

  // Ensure that `item` exists (i.e., the user navigated from the Menu page)
  if (!item) {
    return <p>No item data available. Please navigate from the Menu page.</p>;
  }

  // Calculate total price
  const priceWithoutSymbol = parseFloat(item.price.slice(1)); // Remove "$" symbol and convert to float
  const totalPrice = (priceWithoutSymbol * quantity).toFixed(2); // Calculate total price with quantity

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity > 0 ? newQuantity : 1); // Ensure quantity is positive
  };

  
  const handleProceedToPayment = () => {
    
    alert(`Proceeding to payment for ${item.name} with total price: $${totalPrice}`);
    navigate("/thank-you");
  };

  return (
    <div className="menu-item-detail" style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>{item.name}</h1>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img 
          src={item.imgSrc} 
          alt={item.name} 
          style={{
            maxWidth: "80%",
            height: "auto",
            borderRadius: "8px",
            border: "2px solid #fff",
          }}
        />
      </div>
      <p style={{ fontSize: "1.2em", textAlign: "center" }}>{item.description}</p>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>{item.price}</h3>

      {/* Quantity and total price section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <label htmlFor="quantity" style={{ fontSize: "1.2em", marginRight: "10px" }}>
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          style={{ padding: "5px", fontSize: "1.2em", width: "60px" }}
        />
        <div style={{ fontSize: "1.5em", marginTop: "20px", color: "#ffcc00" }}>
          <strong>Total Price: ${totalPrice}</strong>
        </div>
      </div>

      {/* Payment Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button 
          onClick={handleProceedToPayment} 
          style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            backgroundColor: "#ffcc00",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default MenuItemDetail;
