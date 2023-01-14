import * as React from 'react';
import './about-me.css'
import { Container, Row, Col, Image } from 'react-bootstrap/';
import SectionHeaderComponent from '../shared/section_header/SectionHeaderComponent';
import vector from "./about-me-vector.svg";

function AboutMeComponent() {
    return (
        <Container fluid className="content">
            <Row>
                <Col>
                    <SectionHeaderComponent title="about me" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="aboutme-text">
                        In 2019 I finished studies at <b>Aademy of Fine Arts in Lodz</b>, Poland.
                        Immediately after graduation, I started working as a UI/UX designer in a small startup.
                        I am currently working in a similar position in a large company.
                        Apart from UI and UX I'm working in area of desktop publishing,
                        illustrations and animations, digital painting, 3D modeling, photography and traditional art.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className='about-me-vector' src={vector} />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMeComponent;