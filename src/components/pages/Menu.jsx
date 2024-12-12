import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import '../css/Menu.css'

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Margarita Pizza", description: "A perfect blend of fresh mozzarella, basil, and tomato sauce for the ultimate pizza experience.", price: 630, category: "pizza", imgSrc: "/images/f1.png" },
    { id: 2, name: "Classic Cheeseburger", description: "Juicy beef patty topped with melted cheese, fresh lettuce, and our special sauce, served with fries.", price: 320, category: "burger", imgSrc: "/images/f2.png" },
    { id: 3, name: "Pepperoni Pizza", description: "A mouthwatering pizza topped with flavorful pepperoni and melted cheese, the classic favorite.", price: 700, category: "pizza", imgSrc: "/images/f3.png" },
    { id: 4, name: "Spaghetti Bolognese", description: "Classic Italian pasta served with a rich, savory beef Bolognese sauce, topped with parmesan.", price: 460, category: "pasta", imgSrc: "/images/f4.png" },
    { id: 5, name: "Crispy French Fries", description: "Golden fries, crispy on the outside and soft on the inside, perfect for any meal or as a snack.", price: 180, category: "fries", imgSrc: "/images/f5.png" },
    { id: 6, name: "Vegetarian Pizza", description: "A colorful pizza topped with seasonal vegetables, olives, and mozzarella for a healthy twist.", price: 745, category: "pizza", imgSrc: "/images/f6.png" },
    { id: 7, name: "BBQ Bacon Burger", description: "A smoky BBQ sauce burger with crispy bacon, lettuce, and cheddar cheese, perfect for meat lovers.", price: 660, category: "burger", imgSrc: "/images/f7.png" },
    { id: 8, name: "Cheese Burger Deluxe", description: "A double-patty cheeseburger with lettuce, tomato, and pickles for a gourmet take on a classic.", price: 390, category: "burger", imgSrc: "/images/f8.png" },
    { id: 9, name: "Fettuccine Alfredo", description: "Creamy, dreamy Alfredo sauce over tender fettuccine pasta, topped with parmesan cheese and parsley.", price: 815, category: "pasta", imgSrc: "/images/f9.png" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate();

  const filteredItems =
    activeFilter === "all" ? menuItems : menuItems.filter((item) => item.category === activeFilter);

  const handleItemClick = (item) => {
    navigate(`/menu/${item.id}`, { state: item });
  };

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

  const handleViewMore = () => {
    setItemsPerPage((prev) => prev + 6);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  return (
    <div>
      {viewCart ? (
        <Cart
          cart={cart}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onClose={() => setViewCart(false)}
        />
      ) : (
        <div className="sub_page">
          <section className="food_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Menu</h2>
              </div>

              <ul className="filters_menu">
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

              <div className="filters-content">
                <div className="row grid">
                  {filteredItems.slice(0, itemsPerPage).map((item) => (
                    <div key={item.id} className="col-sm-6 col-lg-4">
                      <div className="box">
                        <div className="img-box" onClick={() => handleItemClick(item)}>
                          <img src={item.imgSrc} alt={item.name} />
                        </div>
                        <div className="detail-box">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <div className="options">
                            <h6>₹{item.price}</h6>
                            <button className="btn" onClick={() => handleAddToCart(item)}>
                              <i className="fa fa-shopping-cart" style={{ color: "white" }}> Buy</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {itemsPerPage < filteredItems.length && (
                <div className="view-more">
                  <button onClick={handleViewMore} className="btn">
                    View More
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Menu;
