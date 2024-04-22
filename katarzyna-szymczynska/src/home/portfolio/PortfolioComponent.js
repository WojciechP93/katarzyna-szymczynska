import * as React from "react";
import "./portfolio.scss";
import { Container, Row, Col, Image } from "react-bootstrap/";
import { Link } from "react-router-dom";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import AlternateButtonComponent from "../../shared/buttons/AlternateButtonComponent";
import logo from "./images/big-logo.svg";

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
          <Link to="https://www.behance.net/KatarzynaSzymczynska" target="_blank">
            <AlternateButtonComponent content="Behance portfolio" />
          </Link>
        </Col>
        <Col className="content-column logo-column">
          <Image src={logo} fluid className="big-logo" />
        </Col>
      </Row>
      <Row xs={1} xl={3} className="tiles-row">
        <Col className="tile-column">
          <Link className="tile-link" to={{ pathname: "/portfolio/mind" }}>
            <div className="tile">
              <p className="category-title">mind</p>
              <p className="category-description">IT work, encompassing UI/UX projects and computer graphics</p>
            </div>
          </Link>
        </Col>
        <Col className="tile-column">
          <Link className="tile-link" to={{ pathname: "/portfolio/body" }}>
            <div className="tile">
              <p className="category-title">body</p>
              <p className="category-description">physical manifestations of work, such as printed materials</p>
            </div>
          </Link>
        </Col>
        <Col className="tile-column">
          <Link className="tile-link" to={{ pathname: "/portfolio/spirit" }}>
            <div className="tile">
              <p className="category-title">spirit</p>
              <p className="category-description">work inspired by my passions and hobbies</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default PortfolioComponent;
