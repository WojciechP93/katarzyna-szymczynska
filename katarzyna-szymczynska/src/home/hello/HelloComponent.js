import * as React from 'react';
import "./hello.css"
import { Container, Row, Col, Image, Button } from 'react-bootstrap/';
import kasia from "./home-kasia-image.svg"

function HelloComponent() {
    return (
        <Container className="hello-content">
            <Row>
                <Col className="hello-column">
                    <Row>
                        <p className="hello-text">
                            Hello!
                        </p>
                    </Row>
                    <Row>
                        <p className="about-text">
                            I am <b>Katarzyna Szymczyńska</b>,
                            artistic soul, UI/UX and graphic
                            designer by profession.
                        </p>
                    </Row>
                    <Row>
                        <Button className="portfolio-button" href="#Section 3">PORFTOLIO</Button>
                    </Row>
                </Col>
                <Col className="image-column" xs={7}>
                    <Image src={kasia} fluid />
                </Col>
            </Row>
        </Container >
    );
};

export default HelloComponent;