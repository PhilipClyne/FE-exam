// src/RestaurantPromotions.js
import React from "react";
import "./RestaurantPromotions.css";

const RestaurantPromotions = () => {
  return (
    <div className="restaurant-promotions-container">
      <h1 className="restaurant-promotions-title">Restaurant Promotions</h1>
      <div className="restaurant-promotion-card">
        <h2 className="restaurant-promotion-title">Happy Hour</h2>
        <p className="restaurant-promotion-description">
          50% off on all drinks from 5 PM to 7 PM every day!
        </p>
      </div>
      <div className="restaurant-promotion-card">
        <h2 className="restaurant-promotion-title">Weekend Special</h2>
        <p className="restaurant-promotion-description">
          Buy one get one free on all main courses every weekend.
        </p>
      </div>
      <div className="restaurant-promotion-card">
        <h2 className="restaurant-promotion-title">Family Feast</h2>
        <p className="restaurant-promotion-description">
          Free dessert for families dining with us on Sundays.
        </p>
      </div>
    </div>
  );
};

export default RestaurantPromotions;
