"use client";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  NavLink,
  Navbar,
  NavbarBrand,
  Nav,
  NavbarCollapse,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" style={{ background: "#00015f", color: "white" }}>
        <Container>
          <NavbarBrand style={{ color: "white" }} href="#home">
            React-Bootstrap
          </NavbarBrand>
          <Navbar.Toggle
            style={{ color: "white" }}
            bg="white"
            aria-controls="basic-navbar-nav"
          />
          <NavbarCollapse style={{ color: "white" }} id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink style={{ color: "white" }} href="#home">
                Home
              </NavLink>
              <NavLink style={{ color: "white" }} href="#link">
                About
              </NavLink>
              <NavLink style={{ color: "white" }} href="#link">
                Portfolio
              </NavLink>

              <NavLink style={{ color: "white" }} href="#link">
                Contact
              </NavLink>
            </Nav>
            <Navbar.Text>
              <a href="https://www.facebook.com/swathi.challapalli.3">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSquareFacebook}
                />
              </a>
              <a href="https://www.linkedin.com/in/swathi-ind/">
                <FontAwesomeIcon
                  style={{ color: "white", marginLeft: "16px" }}
                  icon={faLinkedin}
                />
              </a>
              <FontAwesomeIcon
                style={{ color: "white", marginLeft: "16px" }}
                icon={faInstagram}
              />

              <FontAwesomeIcon
                style={{ color: "white", marginLeft: "16px" }}
                icon={faTwitter}
              />
            </Navbar.Text>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
