// src/pages/HomePage.js

import React from "react";
import "./HomePage.css";

import banner_4 from "../assets/img/Green and Yellow Gradient 3D Minimalist Food Delivery Services Bumper Sticker.png";
import FoodMenu from "../components/homeComponents/FoodMenu.jsx";
import FoodSuggested from "../components/homeComponents/FoodSuggested.jsx";
import Banner from "../components/homeComponents/BannerSection.jsx";
const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />

      <FoodMenu />

      <FoodSuggested />
      <div className="app-dow">
        <img className="delivery" src={banner_4} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
