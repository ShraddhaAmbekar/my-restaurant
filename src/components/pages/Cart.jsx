import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../css/Cart.css";

const Cart = ({ cart, onRemove, onUpdateQuantity, onClose }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart, totalPrice } }); // Pass cart and totalPrice to Checkout page
    onClose(); 
  };

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <button className="close-cart" onClick={onClose}>
          X
        </button>
        <h3>Your Cart</h3>
        <div>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imgSrc} alt={item.name} />
                  <div className="item-details">
                    <h5>{item.name}</h5>
                    <p>₹{item.price}</p>
                    <div>
                      <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className='quantity-number'>{item.quantity}</span>
                      <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className='remove-item' onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h4>Total: ₹{totalPrice}</h4>
                <button onClick={handleCheckout} className="btn btn-primary">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
