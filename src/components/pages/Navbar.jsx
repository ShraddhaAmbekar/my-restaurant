import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setCollapsed(!collapsed);
  };

  const closeNav = () => {
    setCollapsed(true);
  };

  return (
    <nav className="header_section navbar navbar-expand-lg custom_nav-container">
      <div className="container">
        <NavLink to="/" className="navbar-brand" aria-label="Navigate to Home">
          <span>Next</span>Bite
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto">
            {["/", "/menu", "/about", "/book"].map((path, index) => {
              const labels = ["Home", "Menu", "About", "Book Table"];
              return (
                <li className="nav-item" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={path}
                    onClick={closeNav}
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="user_option">
            <NavLink
              to="/menu"
              className="order_online"
              onClick={closeNav}
              aria-label="Order Online"
            >
              Order Online
            </NavLink>
            <NavLink
              to="/signin"
              className="user_link"
              onClick={closeNav}
              aria-label="Sign In"
            >
              <i className="fa fa-user" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
