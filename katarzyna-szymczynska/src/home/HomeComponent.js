import * as React from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap/';
import AboutMeComponent from "./aboutme/AboutMeComponent";
import PortfolioComponent from "./portfolio/PortfolioComponent";
import ContactComponent from "./contact/ContactComponent";
import HelloComponent from './hello/HelloComponent';
import './home.css';

function HomeComponent() {
    return (
        <Container fluid>
            <Row id="Section 1">
                <HelloComponent />
            </Row>
            <Row id="Section 2">
                <AboutMeComponent />
            </Row>
            <Row id="Section 3">
                <PortfolioComponent />
            </Row>
            <Row id="Section 4">
                <ContactComponent />
            </Row>
        </Container>
    );
};

export default HomeComponent;