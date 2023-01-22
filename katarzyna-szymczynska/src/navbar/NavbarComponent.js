import * as React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap/';
import './navbar.css';
import ScrollspyNav from "react-scrollspy-nav";
import logo from "./images/logo.svg"
import instagram from "./images/instagram-logo-link.svg"
import behance from "./images/behance-logo-link.svg"

function NavbarComponent() {
    return (
        <ScrollspyNav scrollTargetIds={["Section 1", "Section 2", "Section 3", "Section 4"]} activeNavClass="nav-link-is-active" scrollDuration="100">
            <Navbar className="navigation-bar" collapseOnSelect expand="lg" >
                <Navbar.Brand className="navigation-bar-brand">
                    <Image className="logo-image" src={logo} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='page-links' defaultActiveKey="#Section 1">
                        <Nav.Link href="#Section 1">home</Nav.Link>
                        <Nav.Link href="#Section 2">about me</Nav.Link>
                        <Nav.Link href="#Section 3">portfolio</Nav.Link>
                        <Nav.Link href="#Section 4">contact</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link className="social-link facebook" href="https://www.facebook.com/k.szymczynska" />
                        <Nav.Link className="social-link instagram" href="https://www.facebook.com/k.szymczynska"><Image className='instagram-icon' fluid /></Nav.Link>
                        <Nav.Link className="social-link behance" href="https://www.facebook.com/k.szymczynska"><Image className='behance-icon' fluid /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </ScrollspyNav>
    );
};

export default NavbarComponent;