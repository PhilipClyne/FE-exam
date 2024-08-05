// src/components/CustomNavbar.js

import React from "react";
import "./Navbar.css";
import logo from "../assets/img/Logo.png"; // Đảm bảo bạn có logo trong thư mục của mình

const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/menu" className="navbar-link">
              THỰC ĐƠN
            </a>
          </li>
          <li className="navbar-item">
            <a href="/promotions" className="navbar-link">
              KHUYẾN MÃI
            </a>
          </li>

          <li className="navbar-item">
            <a href="/catering" className="navbar-link">
              DỊCH VỤ TIỆC
            </a>
          </li>
          <li className="navbar-item">
            <a href="/restaurants" className="navbar-link">
              HỆ THỐNG NHÀ HÀNG
            </a>
          </li>
        </ul>
        <div className="navbar-actions">
          <input type="text" placeholder="Search" className="navbar-search" />
          <a href="/contact" className="navbar-icon">
            Contact
          </a>
          <a href="/cart" className="navbar-icon">
            Cart
            <span className="navbar-cart-count">0</span>
          </a>
          <a href="/menu" className="navbar-icon">
            Menu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
