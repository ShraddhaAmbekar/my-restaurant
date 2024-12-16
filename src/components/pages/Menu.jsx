import React, { useState } from "react";
import "../css/Menu.css";
import Cart from "./Cart"; 
import { menuItems } from "../data/Menuitem"; // Import menu items from local file
import { useNavigate } from "react-router";

const Menu = () => {
  
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all"); 
  const [itemsToShow, setItemsToShow] = useState(6); 
  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const filteredItems = activeFilter === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === activeFilter);
  const visibleItems = filteredItems.slice(0, itemsToShow);
  const handleViewMore = () => {
    navigate("/menu");
    setItemsToShow(itemsToShow + 6); // Load 6 more items
  };

  return (
    <div>
      {viewCart ? (
        <Cart cart={cart} onRemove={handleRemoveFromCart} onClose={() => setViewCart(false)} 
       
         onUpdateQuantity={handleUpdateQuantity} /> 
     
      ) : (
        <div>
          <section className="food_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Menu</h2>
              </div>

              <div className="filters_menu">
                <ul className="filter-list">
                  <li
                    className={activeFilter === "all" ? "active" : ""}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </li>
                  <li
                    className={activeFilter === "burger" ? "active" : ""}
                    onClick={() => setActiveFilter("burger")}
                  >
                    Burger
                  </li>
                  <li
                    className={activeFilter === "pizza" ? "active" : ""}
                    onClick={() => setActiveFilter("pizza")}
                  >
                    Pizza
                  </li>
                  <li
                    className={activeFilter === "pasta" ? "active" : ""}
                    onClick={() => setActiveFilter("pasta")}
                  >
                    Pasta
                  </li>
                  <li
                    className={activeFilter === "fries" ? "active" : ""}
                    onClick={() => setActiveFilter("fries")}
                  >
                    Fries
                  </li>
                  <button
                className="btn btn-primary"
                onClick={() => setViewCart(true)}
                style={{ background: "black", border: "none" }}
              >
                View Cart ({cart.length})
              </button>
                </ul>
              </div>

              <div className="filters-content">
                <div className="row grid">
                  {visibleItems.map((item) => (
                    <div key={item.id} className="col-sm-6 col-lg-4">
                      <div className="box">
                        <div className="img-box" >
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                        <div className="detail-box">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <div className="options">
                            <h6>₹{item.price}</h6>
                            <button
                              className="btn" style={{backgroundColor:"transparent"}}
                              onClick={() => handleAddToCart(item)}
                            >
                              <i className="fa fa-shopping-cart" style={{ color: "white" }}> Add to cart</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {visibleItems.length < filteredItems.length && (
                <button
                  className="btn btn-secondary"
                  style={{ background: "gray", border: "none", marginTop: "20px" }}
                  onClick={handleViewMore}
                >
                  View More
                </button>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Menu;
