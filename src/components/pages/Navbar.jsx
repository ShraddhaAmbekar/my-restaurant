import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import '../css/Navbar.css'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true); // Collapse initially set to true
  const handleNavCollapse = () => {
    setCollapsed(!collapsed); // Toggle the collapse state
  };

  return (
    <nav className="header_section navbar navbar-expand-lg custom_nav-container">
      <div className="container">
        <a className="navbar-brand">
          <span className="navbar-brand">nextbite</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={collapsed ? "false" : "true"}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`} id="navbarSupportedContent">
          {/* Navbar Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/"
                onClick={handleNavCollapse}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/menu"
                onClick={handleNavCollapse}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/about"
                onClick={handleNavCollapse}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                to="/book"
                onClick={handleNavCollapse}
              >
                Book Table
              </NavLink>
            </li>
          </ul>

          {/* User Options */}
          <div className="user_option">
            <NavLink to="/menu" className="order_online">
              Order Online
            </NavLink>
            <NavLink to="/signin" className="user_link">
              <i className="fa fa-user" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
