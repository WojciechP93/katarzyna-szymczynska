import * as React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import ScrollspyNav from "react-scrollspy-nav";

function NavbarComponent() {
    return (
        <ScrollspyNav scrollTargetIds={["Section 1", "Section 2", "Section 3", "Section 4", "Section 5"]} activeNavClass="nav-link-is-active" scrollDuration="500" offset={5}>
            <Navbar className="navigation-bar" collapseOnSelect expand="lg">
                <Navbar.Brand href="#Section 0" className="navigation-bar-brand">EVO ENGINEERING</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" defaultActiveKey="#Section 0">
                        <Nav.Link href="#Section 1">&nbsp;Newsy&nbsp;</Nav.Link>
                        <Nav.Link href="#Section 2">&nbsp;Multimedia&nbsp;</Nav.Link>
                        <Nav.Link href="#Section 3">&nbsp;Oferta&nbsp;</Nav.Link>
                        <Nav.Link href="#Section 4">&nbsp;O Nas&nbsp;</Nav.Link>
                        <Nav.Link href="#Section 5" className="contact-link" >&nbsp;Kontakt&nbsp;</Nav.Link>
                        <Nav.Link href="https://www.facebook.com/evo.engineering.motorsport" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </ScrollspyNav>
    );
};

export default NavbarComponent;