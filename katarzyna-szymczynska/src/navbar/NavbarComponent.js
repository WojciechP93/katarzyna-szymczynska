import * as React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap/';
import './navbar.css';
import logo from "./images/logo.svg"
import { HashLink } from 'react-router-hash-link';

function NavbarComponent() {
    return (
        <Navbar className="navigation-bar" collapseOnSelect expand="lg" style={{ marginLeft: "12px" }}>
            <Navbar.Brand className="navigation-bar-brand">
                <Image className="logo-image" src={logo} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='page-links' defaultActiveKey="#home">
                    <Nav.Link><HashLink className='static-navbar-link' to="/home/#home">home</HashLink></Nav.Link>
                    <Nav.Link><HashLink className='static-navbar-link' to="/home/#aboutme">about me</HashLink></Nav.Link>
                    <Nav.Link><HashLink className='static-navbar-link static-navbar-link-active' to="/home/#portfolio">portfolio</HashLink></Nav.Link>
                    <Nav.Link><HashLink className='static-navbar-link' to="/home/#contact">contact</HashLink></Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link className="social-link facebook" href="https://www.facebook.com/k.szymczynska" />
                    <Nav.Link className="social-link instagram" href="https://www.facebook.com/k.szymczynska"><Image className='instagram-icon' fluid /></Nav.Link>
                    <Nav.Link className="social-link behance" href="https://www.facebook.com/k.szymczynska"><Image className='behance-icon' fluid /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavbarComponent;