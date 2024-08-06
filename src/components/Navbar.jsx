// src/components/CustomNavbar.js

import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  NavbarText,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import "./Navbar.css";
import logo from "../assets/img/Logo.png"; // Ensure you have the logo in your assets folder

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="navbar" sticky="top">
      <div className="navbar-container">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-menu" navbar>
            <NavItem className="navbar-item">
              <NavLink href="/menu" className="navbar-link">
                THỰC ĐƠN
              </NavLink>
            </NavItem>
            <NavItem className="navbar-item">
              <NavLink href="/promotions" className="navbar-link">
                KHUYẾN MÃI
              </NavLink>
            </NavItem>
            <NavItem className="navbar-item">
              <NavLink href="/catering" className="navbar-link">
                DỊCH VỤ TIỆC
              </NavLink>
            </NavItem>
            <NavItem className="navbar-item">
              <NavLink href="/restaurants" className="navbar-link">
                HỆ THỐNG NHÀ HÀNG
              </NavLink>
            </NavItem>
          </Nav>
          <div className="navbar-actions">
            <Input type="text" placeholder="Search" className="navbar-search" />
            <NavbarText>
              <NavLink href="/contact" className="navbar-icon">
                Contact
              </NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/cart" className="navbar-icon">
                Cart
                <span className="navbar-cart-count">0</span>
              </NavLink>
            </NavbarText>
            <NavbarText>
              <NavLink href="/menu" className="navbar-icon">
                Menu
              </NavLink>
            </NavbarText>
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
