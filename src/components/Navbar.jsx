import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { totalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-header">
          <div
            className="nav-toggle"
            onClick={() => setOpenNavbar((prev) => !prev)}
          >
            <FaBars />
          </div>
          <div className="cart-icon" onClick={() => setOpenNavbar(false)}>
            <Link to="/cart" style={{ color: "#fff" }}>
              <FaShoppingCart style={{ fontSize: "1.8rem" }} />
              <span className="total-cart-items">{totalItems}</span>
            </Link>
          </div>
        </div>
        <ul
          className={openNavbar ? "navbar-items view-navbar" : "navbar-items"}
        >
          <li className="navbar-item" onClick={() => setOpenNavbar(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item" onClick={() => setOpenNavbar(false)}>
            <Link to="/products">Products</Link>
          </li>
          <li className="navbar-item" onClick={() => setOpenNavbar(false)}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
