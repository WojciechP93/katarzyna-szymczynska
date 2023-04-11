import * as React from 'react';
import SectionHeaderComponent from '../../shared/section_header/SectionHeaderComponent';
import { Container, Row, Col } from 'react-bootstrap/';
import "./portfolio.css";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import NavbarComponent from '../../navbar/NavbarComponent'


function SubjectComponent(props) {
    return (
        <>
            <NavbarComponent />
            <Container fluid className='portfolio-subject-container'>
                <Row>
                    <ol class="breadcrumb justify-content-left">
                        <HashLink to="/home/#portfolio">portfolio</HashLink>
                    </ol>
                </Row>
                <Row>
                    <SectionHeaderComponent title={props.subjectTitle} />
                </Row>
                <Row md={1} xl={2} style={{ marginLeft: "15px", marginRight: "15px", overflowX: "hidden", overflowY: "hidden", paddingTop: "15px", paddingBottom: "15px" }}>
                    {props.items.map((item) => (
                        <Col style={{ marginBottom: "10px" }}>
                            <Link className='tile-link' to={item.path}>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>


    );
}

export default SubjectComponent;