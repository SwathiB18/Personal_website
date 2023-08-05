"use client";
import React from "react";
import Cmp2 from "./Images/cmp2.jpg";
import Bg3 from "./Images/bg3.jpg";
import "../../.next/static/css/app/component2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Componet2 = () => {
  return (
    <>
      <Card className=" text-white" style={{ margin: "-5px" }}>
        <Card.Img
          src="/_next/static/media/bg3.0a01eae5.jpg"
          alt="Card image"
          style={{ borderRadius: "0px", margin: "0px" }}
        />
        <Card.ImgOverlay>
          <Row>
            <Col>
              <Card.Text className="cardText1">
                Hi there,This is Swathi
              </Card.Text>
              <h1 className="cardText2">Front end developer</h1>
              <Button
                size="lg"
                className="btn2"
                style={{
                  backgroundColor: "#ea5267",
                  borderRadius: "0px",
                  border: "none",
                  padding: "15px",
                  textAlign: "center",
                  marginLeft: "40px",
                  marginTop: "40px",
                  fontSize: "14px",
                }}
              >
                Contact Me
              </Button>
            </Col>
            <Col className="column1"></Col>
          </Row>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
export default Componet2;
