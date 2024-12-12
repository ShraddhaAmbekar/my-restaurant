import React from "react";
import "../css/Cart.css"; // Make sure to create this file for custom styling
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, onRemove, onUpdateQuantity, onClose }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const navigate = useNavigate(); // Move this to the top of the function

  const handleProceedToPayment = () => {
    // You no longer need to reference `item.name`, instead use `totalPrice` for the alert and navigation
    alert(`Proceeding to payment with total price: ₹${totalPrice}`);
    navigate("/thank-you"); // Navigate to the "thank-you" page
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="btn-close" onClick={onClose}>
          ✕
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty!</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-img">
                  <img src={item.imgSrc} alt={item.name} />
                </div>
                <div className="item-details">
                  <h5 className="item-name">{item.name}</h5>
                  <p className="item-price">Price: ₹{item.price}</p>
                  <div className="item-quantity">
                    <button
                      className="btn-quantity"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn-quantity"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3 className="total-price">Total: ₹{totalPrice}</h3>
            <button className="btn-checkout" onClick={handleProceedToPayment}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
