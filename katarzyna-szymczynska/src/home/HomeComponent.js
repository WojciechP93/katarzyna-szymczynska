import * as React from "react";
import { Container, Row } from "react-bootstrap/";
import AboutMeComponent from "./aboutme/AboutMeComponent";
import PortfolioComponent from "./portfolio/PortfolioComponent";
import ContactComponent from "./contact/ContactComponent";
import HelloComponent from "./hello/HelloComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import FooterComponent from "../footer/FooterComponent";
import MySkillsComponent from "./myskills/MySkillsComponent";
import "./home.css";

function HomeComponent() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="home-container" id="home">
        <Row>
          <HelloComponent />
        </Row>
        <Row id="aboutme">
          <AboutMeComponent />
        </Row>
        <Row id="myskills">
          <MySkillsComponent />
        </Row>
        <Row id="portfolio">{/* <PortfolioComponent /> */}</Row>
        <Row id="contact">
          <ContactComponent />
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}

export default HomeComponent;
