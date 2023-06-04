import * as React from "react";
import "./hello.css";
import { Image, Button, Stack, Container, Row, Col } from "react-bootstrap/";
import kasia from "./home-kasia-image.svg";
import { HashLink } from "react-router-hash-link";

function HelloComponent() {
  return (
    <Container fluid className="portfolio-subject-container">
      <Row
        xs={1}
        lg={2}
        style={{
          marginLeft: "50px",
          marginRight: "50px",
          overflowX: "hidden",
          overflowY: "hidden",
        }}>
        <Col>
          <div className="text-container">
            <p className="hello-text">Hello!</p>
            <p className="about-text">
              I am <b>Katarzyna Szymczyńska</b>,<br></br>
              artistic soul, UI/UX and graphic<br></br>
              designer by profession.
            </p>
            <HashLink className="static-navbar-link static-navbar-link-active" to="/home/#portfolio">
              <Button className="portfolio-button" href="#Section 3">
                PORFTOLIO
              </Button>
            </HashLink>
          </div>
        </Col>
        <Col>
          <div>
            <Image src={kasia} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HelloComponent;
