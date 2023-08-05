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

import Componet2 from "./component2";
import Header from "./Header";
import AboutMe from "./Aboutme";
const Home = () => {
  return (
    <main>
      <Header />
      <Componet2></Componet2>
      <AboutMe></AboutMe>
    </main>
  );
};
export default Home;
