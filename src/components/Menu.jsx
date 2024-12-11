import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Margarita Pizza", description: "A perfect blend of fresh mozzarella, basil, and tomato sauce for the ultimate pizza experience.", price: "$18", category: "pizza", imgSrc: "images/f1.png" },
    { id: 2, name: "Classic Cheeseburger", description: "Juicy beef patty topped with melted cheese, fresh lettuce, and our special sauce, served with fries.", price: "$13", category: "burger", imgSrc: "images/f2.png" },
    { id: 3, name: "Pepperoni Pizza", description: "A mouthwatering pizza topped with flavorful pepperoni and melted cheese, the classic favorite.", price: "$20", category: "pizza", imgSrc: "images/f3.png" },
    { id: 4, name: "Spaghetti Bolognese", description: "Classic Italian pasta served with a rich, savory beef Bolognese sauce, topped with parmesan.", price: "$16", category: "pasta", imgSrc: "images/f4.png" },
    { id: 5, name: "Crispy French Fries", description: "Golden fries, crispy on the outside and soft on the inside, perfect for any meal or as a snack.", price: "$8", category: "fries", imgSrc: "images/f5.png" },
    { id: 6, name: "Vegetarian Pizza", description: "A colorful pizza topped with seasonal vegetables, olives, and mozzarella for a healthy twist.", price: "$17", category: "pizza", imgSrc: "images/f6.png" },
    { id: 7, name: "BBQ Bacon Burger", description: "A smoky BBQ sauce burger with crispy bacon, lettuce, and cheddar cheese, perfect for meat lovers.", price: "$16", category: "burger", imgSrc: "images/f7.png" },
    { id: 8, name: "Cheese Burger Deluxe", description: "A double-patty cheeseburger with lettuce, tomato, and pickles for a gourmet take on a classic.", price: "$14", category: "burger", imgSrc: "images/f8.png" },
    { id: 9, name: "Fettuccine Alfredo", description: "Creamy, dreamy Alfredo sauce over tender fettuccine pasta, topped with parmesan cheese and parsley.", price: "$19", category: "pasta", imgSrc: "images/f9.png" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const filteredItems =
    activeFilter === "all" ? menuItems : menuItems.filter((item) => item.category === activeFilter);

  const handleItemClick = (item) => {
    navigate(`/menu/${item.id}`, { state: item });
  };

  return (
    <div>
      <div className="sub_page">
        <div className="hero_area">
          <div className="bg-box">
            <img src="images/hero-bg.jpg" alt="Background" />
          </div>
        </div>

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
            </ul>

            <div className="filters-content">
              <div className="row grid">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="col-sm-6 col-lg-4"
                    onClick={() => handleItemClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="box">
                      <div className="img-box">
                        <img src={item.imgSrc} alt={item.name} />
                      </div>
                      <div className="detail-box">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="options">
                          <h6>{item.price}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-box">
              <a href="#">View More</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
