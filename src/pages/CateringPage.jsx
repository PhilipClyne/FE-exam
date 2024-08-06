// src/CateringPromotions.js
import React from "react";
import "./CateringPromotions.css";

const CateringPromotions = () => {
  return (
    <div className="catering-promotions-container">
      <h1 className="catering-promotions-title">Catering Promotions</h1>
      <div className="catering-promotion-card">
        <h2 className="catering-promotion-title">Corporate Event Special</h2>
        <p className="catering-promotion-description">
          20% off on corporate events with over 100 attendees!
        </p>
      </div>
      <div className="catering-promotion-card">
        <h2 className="catering-promotion-title">Wedding Package</h2>
        <p className="catering-promotion-description">
          Book your wedding catering with us and get a free dessert table!
        </p>
      </div>
      <div className="catering-promotion-card">
        <h2 className="catering-promotion-title">Birthday Bash</h2>
        <p className="catering-promotion-description">
          Free cake for birthday parties with a minimum of 50 guests.
        </p>
      </div>
    </div>
  );
};

export default CateringPromotions;
