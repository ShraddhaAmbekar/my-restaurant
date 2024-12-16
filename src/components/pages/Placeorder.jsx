import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/PlaceOrder.css";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve data passed from Checkout
  const { cart, totalPrice, address, contact } = location.state;

  const handlePlaceOrder = () => {
    // Simulate order placement
    alert('Your order has been placed successfully!');
    console.log('Order Details:', { cart, totalPrice, address, contact });

    // Redirect to homepage or order success page
    navigate('/thank-you');
  };

  return (
    <div className="place-order-container">
      <div className="place-order-card">
        <h2 className="place-order-title">Place Your Order</h2>

        {/* Order Summary */}
        <div className="order-summary">
          <h3 className="section-title">Order Summary</h3>
          <ul className="order-list">
            {cart.map((item) => (
              <li key={item.id} className="order-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x {item.quantity}</span>
                </div>
                <span className="item-price">₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Total:</span>
            <span className="total-price">₹{totalPrice}</span>
          </div>
        </div>

        {/* Address and Contact Details */}
        <div className="order-details">
          <h3 className="section-title">Delivery Details</h3>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Contact:</strong> {contact}</p>
        </div>

        {/* Place Order Button */}
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Confirm & Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
