import React from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const cartItems = location.state?.cart || []; // Get cart items from state

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h4>{item.price}</h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
