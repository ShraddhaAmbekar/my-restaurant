import React, { useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true); // Collapse initially set to true
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [showSearch, setShowSearch] = useState(false); // State for toggling search input visibility

  // Function to handle collapsing and expanding the navbar
  const handleNavCollapse = () => {
    setCollapsed(!collapsed); // Toggle the collapse state
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query state
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search for:", searchQuery);
      // Perform search logic here, like navigating to a results page
    }
  };

  // Toggle visibility of the search input
  const toggleSearchInput = () => {
    setShowSearch(!showSearch); // Toggle search input visibility on click
  };

  return (
    <nav className="header_section navbar navbar-expand-lg custom_nav-container">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <span>nextbite</span>
        </a>

        {/* Toggler Button */}
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
            <li className="nav-item active">
              <Link className="nav-link" to="/" aria-current="page" onClick={handleNavCollapse}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={handleNavCollapse}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavCollapse}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book" onClick={handleNavCollapse}>
                Book Table
              </Link>
            </li>
          </ul>

          {/* User Options */}
          <div className="user_option">
            <Link to="/signin" className="user_link">
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <a className="cart_link" href="/">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>

            {/* Search Button and Input */}
            <div className="search-wrapper">
              {/* Show search icon if search bar is hidden */}
              {!showSearch && (
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  onClick={toggleSearchInput} // Toggle search input visibility
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              )}

              {/* Show search input field if showSearch is true */}
              {showSearch && (
                <form className="form-inline" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    className="form-control mr-sm-2"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              )}
            </div>

            <Link to="/menu" className="order_online">
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

