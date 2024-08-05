// src/Promotions.js
import React from "react";
import "./Promotions.css";

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h1 className="promotions-title">Current Promotions</h1>
      <div className="promotion-card">
        <h2 className="promotion-title">Summer Sale</h2>
        <p className="promotion-description">Get 50% off on all items!</p>
      </div>
      <div className="promotion-card">
        <h2 className="promotion-title">Buy One Get One Free</h2>
        <p className="promotion-description">For all shoes and sandals.</p>
      </div>
      <div className="promotion-card">
        <h2 className="promotion-title">Clearance</h2>
        <p className="promotion-description">
          Up to 70% off on selected items.
        </p>
      </div>
    </div>
  );
};

export default Promotions;
