import * as React from "react";
import { Navbar, Nav, Image, Container, Row, Col, Stack } from "react-bootstrap/";
import "./navbar.scss";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "./images/logo.svg";

function NavbarComponent() {
  return (
    <ScrollspyNav
      scrollTargetIds={["home", "aboutme", "portfolio", "contact"]}
      activeNavClass="nav-link-is-active"
      scrollDuration="100">
      <Navbar className="navigation-bar" collapseOnSelect expand="lg">
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
          <Nav>
            <Stack direction="horizontal" className="social-links">
              <Nav.Link
                className="social-link linkedin"
                href="https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/"
              />
              <Nav.Link className="social-link instagram" href="https://www.facebook.com/k.szymczynska">
                <Image className="instagram-icon" fluid />
              </Nav.Link>
              <Nav.Link className="social-link behance" href="https://www.facebook.com/k.szymczynska">
                <Image className="behance-icon" fluid />
              </Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ScrollspyNav>
  );
}

export default NavbarComponent;
