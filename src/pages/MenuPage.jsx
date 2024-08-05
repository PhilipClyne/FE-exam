import React, { useState } from "react";
import { Card, Col, Row, Container, Navbar, Nav } from "react-bootstrap";
import salesoff from "../assets/img/Sale-off.jpg";
import "./MenuPage.css";

const FoodMenu = () => {
  const foodItems = [
    // Add your food items data here
    {
      title: "Combo nhóm 6",
      description:
        "6 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
      price: "275.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 2",
      description: "2 Miếng Gà + 1 Burger Zinger + 2 Pepsi",
      price: "127.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 3",
      description:
        "3 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Chiên (vừa) + 2 Pepsi (lớn)",
      price: "160.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 4",
      description: "4 Miếng Gà + 1 Khoai Tây Mũi Cau (vừa) + 2 Pepsi (lớn)",
      price: "167.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 5",
      description:
        "5 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 2 Pepsi (lớn)",
      price: "185.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 7",
      description:
        "7 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 3 Pepsi (lớn)",
      price: "300.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 8",
      description:
        "8 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
      price: "320.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Combo nhóm 9",
      description:
        "9 Miếng Gà + 1 Mì Ý Popcorn + 1 Khoai Tây Mũi Cau (vừa) + 4 Pepsi (lớn)",
      price: "350.000đ",
      img: salesoff,
      category: "Combo",
    },
    {
      title: "Burger Zinger",
      description: "1 Burger Zinger",
      price: "50.000đ",
      img: salesoff,
      category: "Burger",
    },
    {
      title: "Burger Chicken",
      description: "1 Burger Chicken",
      price: "55.000đ",
      img: salesoff,
      category: "Burger",
    },
    {
      title: "Burger Chicken",
      description: "1 Burger Chicken",
      price: "55.000đ",
      img: salesoff,
      category: "Burger",
    },
    {
      title: "Burger Chicken",
      description: "1 Burger Chicken",
      price: "55.000đ",
      img: salesoff,
      category: "Burger",
    },
    {
      title: "Chicken Wings",
      description: "5 Chicken Wings",
      price: "100.000đ",
      img: salesoff,
      category: "Chicken",
    },
    {
      title: "Chicken Drumsticks",
      description: "5 Chicken Drumsticks",
      price: "110.000đ",
      img: salesoff,
      category: "Chicken",
    },
    {
      title: "Popcorn Chicken",
      description: "1 Popcorn Chicken",
      price: "60.000đ",
      img: salesoff,
      category: "Chicken",
    },
    {
      title: "French Fries",
      description: "1 French Fries",
      price: "30.000đ",
      img: salesoff,
      category: "Side",
    },
    {
      title: "Onion Rings",
      description: "1 Onion Rings",
      price: "35.000đ",
      img: salesoff,
      category: "Side",
    },
    {
      title: "Coleslaw",
      description: "1 Coleslaw",
      price: "25.000đ",
      img: salesoff,
      category: "Side",
    },
    {
      title: "Pepsi",
      description: "1 Pepsi (lớn)",
      price: "15.000đ",
      img: salesoff,
      category: "Drink",
    },
    {
      title: "Coca Cola",
      description: "1 Coca Cola (lớn)",
      price: "15.000đ",
      img: salesoff,
      category: "Drink",
    },
    {
      title: "Sprite",
      description: "1 Sprite (lớn)",
      price: "15.000đ",
      img: salesoff,
      category: "Drink",
    },
    {
      title: "Orange Juice",
      description: "1 Orange Juice",
      price: "20.000đ",
      img: salesoff,
      category: "Drink",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["All", "Combo", "Burger", "Chicken", "Side", "Drink"];

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <Container>
      <h1 className="title">Danh Mục Món Ăn</h1>
      <Navbar bg="light" variant="light" className="mb-4">
        <Nav className="mr-auto" activeKey={selectedCategory}>
          {categories.map((category, index) => (
            <Nav.Link
              key={index}
              eventKey={category}
              onClick={() => handleSelect(category)}
            >
              {category}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>

      {categories
        .filter((category) => category !== "All")
        .map((category) => (
          <div key={category}>
            <Row>
              {filteredItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <Col md={3} key={index}>
                    <Card className="food-card">
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
          </div>
        ))}
    </Container>
  );
};

export default FoodMenu;
