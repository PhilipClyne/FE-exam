// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Footer from "./components/Footer.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import CateringPage from "./pages/CateringPage.jsx";
import RestaurantsPage from "./pages/RestaurantsPage.jsx"; // src/index.js or src/App.js

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />{" "}
        {/* Placeholder for restaurant page */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
