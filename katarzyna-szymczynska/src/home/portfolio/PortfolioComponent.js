import * as React from "react";
import "./portfolio.scss";
import { Stack, Container, Row, Col, Image } from "react-bootstrap/";
import { Link } from "react-router-dom";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import AlternateButtonComponent from "../../shared/buttons/AlternateButtonComponent";
import logo from "./images/big-logo.svg";
import uiux from "../../images/portfolio/ui-ux.png";
import branding from "../../images/portfolio/branding-marketing.png";
import digital from "../../images/portfolio/graphic-digital.png";
import animations from "../../images/portfolio/animations.png";
import photography from "../../images/portfolio/photography.png";
import ThreeD from "../../images/portfolio/3D.png";
import drawings from "../../images/portfolio/traditional-art/drawings.png";
import paintings from "../../images/portfolio/traditional-art/paintings.png";
import murals from "../../images/portfolio/traditional-art/murals.png";
import handicrafts from "../../images/portfolio/traditional-art/handicrafts.png";

function PortfolioComponent() {
  return (
    <Container fluid className="portfolio-container">
      <Row>
        <SectionHeaderComponent title="portfolio" />
      </Row>
      <Row xs={1} xl={2} className="content-row">
        <Col className="content-column">
          <p className="portftolio-description">
            In my portfolio, I chose the motif of fire because it's my element - I'm a Leo. In my logo, I incorporate
            the triquetra symbol, inspired by Celtic culture, to represent the trinity of body, mind, and spirit within
            each individual.
            <br />
            <br />
            This concept helps me organize my projects into three distinct areas: intellect, reflected in my
            intellectual work; physicality, seen in the tangible outcomes of my efforts; and spirituality, which
            influences my artistic perspective and passions.
          </p>
          <AlternateButtonComponent content="Behance portfolio" />
        </Col>
        <Col className="content-column logo-column">
          <Image src={logo} fluid className="big-logo" />
        </Col>
      </Row>
      <Row xs={1} xl={3} className="tiles-row">
        <Col className="tile-column">
          <div className="tile">
            <p className="category-title">mind</p>
            <p className="category-description">IT work, encompassing UI/UX projects and computer graphics</p>
          </div>
        </Col>
        <Col className="tile-column">
          <div className="tile">
            <p className="category-title">body</p>
            <p className="category-description">physical manifestations of work, such as printed materials</p>
          </div>
        </Col>
        <Col className="tile-column">
          <div className="tile">
            <p className="category-title">spirit</p>
            <p className="category-description">work inspired by my passions and hobbies</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioComponent;
