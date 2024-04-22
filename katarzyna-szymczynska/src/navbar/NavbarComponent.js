import * as React from "react";
import { Navbar, Nav, Image, Container, Row, Col, Stack } from "react-bootstrap/";
import "./navbar.scss";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "./images/logo.svg";
import SocialLinksComponent from "./SocialLinksComponent";

function NavbarComponent() {
  return (
    <ScrollspyNav
      scrollTargetIds={["home", "aboutme", "myskills", "portfolio", "contact"]}
      activeNavClass="nav-link-is-active"
      scrollDuration="100">
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
                  <Nav.Link href="#home" className="nav-link-is-active">
                    home
                  </Nav.Link>
                  <Nav.Link href="#aboutme">about me</Nav.Link>
                  <Nav.Link href="#myskills">my skills</Nav.Link>
                  <Nav.Link href="#portfolio">portfolio</Nav.Link>
                  <Nav.Link href="#contact">contact</Nav.Link>
                </Nav>
              </Col>
              <Col xl={2} lg={2} />
            </Row>
          </Container>
          <SocialLinksComponent />
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>
  );
}

export default NavbarComponent;
