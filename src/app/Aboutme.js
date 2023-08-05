"use client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../.next/static/css/app/component2.css";
const AboutMe = () => {
  return (
    <>
      <Container fluid="true" style={{ background: "#00015f" }}>
        <Row>
          <Col>
            <p className="para1">ABOUT ME</p>
            <p className="para2">
              Good lights it very to above. Days image to sea. Over there
              seasons and spirit beast in. Greater bearing creepeth very behold
              fourth night morning seed moved.
            </p>
            <p className="para3">
              02<sub className="sub1">years of Experience</sub>
            </p>
          </Col>
          <Col>
            <p className="para1">EXPERIENCES</p>
            <Row>
              <Col>
                <h5 className="para2">Graduate Trainee</h5>
                <h5 className="para4">
                  At Novisync From Feb 2019 to March 2020
                </h5>
                <h5 className="para2">SQA Engineer</h5>
                <h5 className="para4">
                  At tearafast Networks from Dec 2022 to feb 2022
                </h5>
              </Col>
              <Col>
                <h5 className="para2">Junior developer</h5>
                <h5 className="para4">
                  At Pohu Labs From Nov 2021 to Feb 2022
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AboutMe;
