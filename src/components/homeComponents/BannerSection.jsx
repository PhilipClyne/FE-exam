import React from "react";
import { Carousel } from "react-bootstrap";
import banner_1 from "../../assets/img/1.png";

import banner_2 from "../../assets/img/2.png";

import banner_3 from "../../assets/img/3.png";
function Banner() {
  return (
    <div>
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
    </div>
  );
}

export default Banner;
