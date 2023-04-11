import * as React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap/';
import './navbar.css';
import ScrollspyNav from "react-scrollspy-nav";
import logo from "./images/logo.svg"

function ScrollSpyNavbarComponent() {
    return (
        <ScrollspyNav scrollTargetIds={["home", "aboutme", "portfolio", "contact"]} activeNavClass="nav-link-is-active" scrollDuration="100">
            <Navbar className="navigation-bar" collapseOnSelect expand="lg" >
                <Navbar.Brand className="navigation-bar-brand">
                    <Image className="logo-image" src={logo} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='page-links'>
                        <Nav.Link href="#home" className='nav-link-is-active'>home</Nav.Link>
                        <Nav.Link href="#aboutme">about me</Nav.Link>
                        <Nav.Link href="#portfolio">portfolio</Nav.Link>
                        <Nav.Link href="#contact">contact</Nav.Link>
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

export default ScrollSpyNavbarComponent;