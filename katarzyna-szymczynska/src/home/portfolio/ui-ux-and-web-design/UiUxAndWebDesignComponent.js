import * as React from 'react';
import SectionHeaderComponent from '../../../shared/section_header/SectionHeaderComponent';
import { Stack, Button, Image, Container, Row } from 'react-bootstrap/';
import "./ui-ux.css";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import EquiAPP from './images/EquiAPP-mockup1.png'
import Parvis from './images/Parvis-mockup1.png'
import Tapit from './images/tapi-website-mockup1.png'
import TapitM from './images/tapit-mobile-mockup1.png'
import TapitC from './images/tapi-customer-app-mockup1.png'
import Cat from './images/cat-mockup1.png'
import Mti from './images/mti-mockup1.png'
import Aviator from './images/aviator-mockup1.png'
import Versant from './images/versant-mockup1.png'
import Jgl from './images/jgl-mockup1.png'


function UiUxAndWebDesignComponent() {

    return (
        <Container fluid>
            <Row id="Section 3">
                <Stack className='ui-ux-container'>
                    <Stack direction='horizontal' gap={3}>
                        <ol class="breadcrumb justify-content-center">
                            <Link to="/home">porftolio</Link>
                        </ol>
                    </Stack>
                    <Stack className='ui-ux-stack'>
                        <SectionHeaderComponent title="UI/UX and web design" />
                        <Stack gap={4}>
                            <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={4}>
                                <Link to={{ pathname: "/portfolio/ui-ux-and-web-design-component/equi-app" }}>
                                    <Card className="project-card">
                                        <Card.Img variant="top" src={EquiAPP} />
                                        <Card.Title>EquiAPP</Card.Title>
                                        <Card.Body>
                                            <Card.Text>
                                                Design of a mobile application for horse riding enthusiasts, diploma design.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Parvis} />
                                    <Card.Title>PARVIS website</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Website design for apartment rental services.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={4}>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Tapit} />
                                    <Card.Title>TapIT website</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Website design for a startup. Description of the business using infographics, photos ...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={TapitM} />
                                    <Card.Title>TapIT app</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Mobile and desktop application project for TapIT company. The application allows...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={4}>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={TapitC} />
                                    <Card.Title>TapIT Customer app</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            A mobile application designed for pub customers. It allows you to create ...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Cat} />
                                    <Card.Title>CAT app</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Classification App for Tools - Oerlikon Balzers.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={4}>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Mti} />
                                    <Card.Title>MTI</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            The MTI application allows you to track the working hours of various machines in your area.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Aviator} />
                                    <Card.Title>AVIATOR-1</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Design of the interface of the application used to operate the flight simulator...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                            <Stack direction='horizontal' className='portfolio-horizontal-stack' gap={4}>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Versant} />
                                    <Card.Title>Versant</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            Educational platform project. The application allows you to check your level of English...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="project-card">
                                    <Card.Img variant="top" src={Jgl} />
                                    <Card.Title>JGL</Card.Title>
                                    <Card.Body>
                                        <Card.Text>
                                            A few screens of an app which allows the user to manage machines and machines ...
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack >

            </Row>
        </Container>

    );
}

export default UiUxAndWebDesignComponent;