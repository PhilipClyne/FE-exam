// src/pages/HomePage.js

import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomePage.css";
import banner_1 from "../assets/img/1.png";

import banner_2 from "../assets/img/2.png";

import banner_3 from "../assets/img/3.png";
import banner_4 from "../assets/img/Green and Yellow Gradient 3D Minimalist Food Delivery Services Bumper Sticker.png";
import FoodMenu from "../components/FoodMenu";
import FoodSuggested from "../components/FoodSuggested";
const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <FoodMenu />
      <FoodSuggested />
      <div className="app-dow">
        <img className="delivery" src={banner_4} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
