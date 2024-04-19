import * as React from "react";
import { Image, Container, Row, Col, Stack } from "react-bootstrap/";
import logo from "../navbar/images/logo.svg";
import "./footer.scss";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function FooterComponent() {
  return (
    <Container fluid>
      <Row>
        <p className="footer-text">&#169; Designed by Katarzyna Szymczyńska in 2024. All rights reserved.</p>
      </Row>
    </Container>
  );
}

export default FooterComponent;
