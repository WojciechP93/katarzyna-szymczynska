import * as React from "react";
import { Navbar, Nav, Image, Container, Row, Col } from "react-bootstrap/";
import "./navbar.scss";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "./images/logo.svg";
import SocialLinksComponent from "./SocialLinksComponent";

function NavbarComponent() {
  return (
    <ScrollspyNav
      scrollTargetIds={["home", "aboutme", "portfolio", "contact"]}
      activeNavClass="nav-link-is-active"
      scrollDuration="100">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand className="navigation-bar-brand">
          <Image src={logo} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container fluid>
            <Row>
              <Col xl={3} lg={2} />
              <Col xl={6} lg={8}>
                <Nav className="page-links">
                  <Nav.Link href="#home" className="nav-link-is-active">
                    home
                  </Nav.Link>
                  <Nav.Link href="#aboutme">about me</Nav.Link>
                  <Nav.Link href="#portfolio">portfolio</Nav.Link>
                  <Nav.Link href="#contact">contact</Nav.Link>
                </Nav>
              </Col>
              <Col xl={3} lg={2} />
            </Row>
          </Container>
          <SocialLinksComponent />
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>
  );
}

export default NavbarComponent;
