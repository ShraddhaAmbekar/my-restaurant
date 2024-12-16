import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart, totalPrice } = location.state; // Retrieve cart and totalPrice

  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation (optional)
    if (!address || !contact) {
      alert('Please fill in both Address and Contact fields.');
      return;
    }

    // Navigate to Place Order component with all required state
    navigate('/place-order', {
      state: {
        cart,
        totalPrice,
        address,
        contact,
      },
    });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2 className="checkout-title">Checkout</h2>

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

        {/* Address and Contact Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3 className="section-title">Your Details</h3>
          <label className="form-label">
            Address:
            <textarea
              className="form-textarea"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your delivery address"
              required
            />
          </label>
          <label className="form-label">
            Contact Number:
            <input
              className="form-input contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your contact number"
              required
            />
          </label>
          <button type="submit" className="checkout-btn">
            Continue to Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
