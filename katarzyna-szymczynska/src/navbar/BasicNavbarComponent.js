import * as React from "react";
import { Navbar, Nav, Image, Container, Row, Col, Stack } from "react-bootstrap/";
import { HashLink } from "react-router-hash-link";
import "./navbar.scss";
import logo from "./images/logo.svg";
import SocialLinksComponent from "./SocialLinksComponent";

function BasicNavbarComponent() {
  return (
    <Navbar className="navigation-bar" collapseOnSelect expand="xxl">
      <Navbar.Brand className="navigation-bar-brand">
        <Stack direction="horizontal" gap={3}>
          <Image src={logo} fluid className="logo" />
          <Container fluid className="name-container">
            <Row>
              <p className="name">Katarzyna Szymczyńska</p>
            </Row>
            <Row>
              <p className="profession">UI & UX designer</p>
            </Row>
          </Container>
        </Stack>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container fluid>
          <Row>
            <Col xl={2} lg={2} className="margin-column" />
            <Col xl={8} lg={8}>
              <Nav className="page-links">
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="/home/#aboutme">
                  <HashLink className="hash-link" to="/home/#aboutme">
                    about me
                  </HashLink>
                </Nav.Link>
                <Nav.Link href="#myskills">
                  <HashLink className="hash-link" to="/home/#myskills">
                    my skills
                  </HashLink>
                </Nav.Link>
                <Nav.Link href="#portfolio">
                  <HashLink className="hash-link nav-link-is-active" to="/home/#portfolio">
                    portfolio
                  </HashLink>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <HashLink className="hash-link" to="/home/#contact">
                    contact
                  </HashLink>
                </Nav.Link>
              </Nav>
            </Col>
            <Col xl={2} lg={2} />
          </Row>
        </Container>
        <SocialLinksComponent />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicNavbarComponent;
