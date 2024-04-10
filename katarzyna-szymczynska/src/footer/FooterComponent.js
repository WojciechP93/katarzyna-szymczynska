import * as React from "react";
import { Image, Container, Row, Col, Stack } from "react-bootstrap/";
import logo from "../navbar/images/logo.svg";
import "./footer.scss";

function FooterComponent() {
  return (
    <Container fluid className="footer-content">
      <Row>
        <Col>
          <Stack direction="horizontal" gap={3}>
            <Image className="logo-image" src={logo} fluid />
            <Container fluid>
              <Row>
                <p className="name">Katarzyna Szymczyńska</p>
              </Row>
              <Row>
                <p className="profession">UI & UX designer</p>
              </Row>
            </Container>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterComponent;
