import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import salesoff from "../../assets/img/Sale-off.jpg";
import "./FoodMenu.css";

const FoodMenu = () => {
  const foodItems = [
    {
      title: "Combo nhóm 6",
      description:
        "6 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
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
    {
      title: "Combo nhóm 5",
      description:
        "5 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 2 Pepsi (lớn)",
      price: "185.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 7",
      description:
        "7 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 3 Pepsi (lớn)",
      price: "300.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 8",
      description:
        "8 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
      price: "320.000đ",
      img: salesoff,
    },
    {
      title: "Combo nhóm 9",
      description:
        "9 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
      price: "350.000đ",
      img: salesoff,
    },
  ];

  return (
    <Container>
      <h1 className="title">Danh Mục Món Ăn</h1>
      <Row>
        {foodItems.map((item, index) => (
          <Col md={3} key={index}>
            <Card className="food-card" style={{ height: "400px" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="price">{item.price}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodMenu;
