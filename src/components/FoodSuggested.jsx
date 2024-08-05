import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import salesoff from "../assets/img/Sale-off.jpg";
import "./FoodMenu.css";

const FoodMenu = () => {
  const cards = [
    {
      title: "Combo nhóm 6",
      description: "6 Miếng Gà + 1 Mì Ý Popcorn + 4 Pepsi (lớn)",
      price: "275.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 2",
      description: "2 Miếng Gà + 1 Burger Zinger + 2 Pepsi",
      price: "127.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 3",
      description:
        "3 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Chiên (vừa) + 2 Pepsi (lớn)",
      price: "160.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 4",
      description: "4 Miếng Gà + 1 Khoai Tây Mũi Cau (vừa) + 2 Pepsi (lớn)",
      price: "167.000đ",
      img: salesoff,
    },
    // Add more items as needed
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <h1 className="title">Danh Mục Món Ăn</h1>
      <Carousel responsive={responsive} infinite={true} autoPlay={false}>
        {cards.map((card, index) => (
          <Card
            key={index}
            style={{ height: "28rem", margin: "15px" }}
            className="food-card"
          >
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <div className="price">{card.price}</div>
              <Button variant="secondary" disabled>
                Thêm
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default FoodMenu;
