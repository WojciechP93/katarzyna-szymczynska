import * as React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap/";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import PortfolioComponent from "./portfolio/PortfolioComponent";
import ContactComponent from "./contact/ContactComponent";
import HelloComponent from "./hello/HelloComponent";
import ScrollSpyNavbarComponent from "../navbar/ScrollSpyNavbarComponent";
import "./home.css";

function HomeComponent() {
  return (
    <>
      <ScrollSpyNavbarComponent />
      <Container fluid className="home-container" id="home">
        <Row>
          <HelloComponent />
        </Row>
        <Row id="aboutme">
          <AboutMeComponent />
        </Row>
        <Row id="portfolio">
          <PortfolioComponent />
        </Row>
        <Row id="contact">
          <ContactComponent />
        </Row>
      </Container>
    </>
  );
}

export default HomeComponent;
