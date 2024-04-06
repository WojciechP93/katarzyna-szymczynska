import * as React from "react";
import { Image, Container, Row, Col, Stack } from "react-bootstrap/";
import logo from "../navbar/images/logo.svg";
import "./footer.css";

function FooterComponent() {
  return (
    <Container fluid>
      <Row className="footer-content">
        <Col>
          <Stack direction="horizontal" gap={3}>
            <Image className="logo-image" src={logo} fluid />
            <Container fluid>
              <Row>
                <p className="footer-text name">Katarzyna Szymczyńska</p>
              </Row>
              <Row>
                <p className="footer-text profession">UI & UX designer</p>
              </Row>
            </Container>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
