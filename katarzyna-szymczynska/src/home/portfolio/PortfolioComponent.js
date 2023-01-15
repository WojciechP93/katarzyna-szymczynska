import * as React from 'react';
import "./portfolio.css"
import { Container, Row, Col, Stack } from 'react-bootstrap/';
import SectionHeaderComponent from '../shared/section_header/SectionHeaderComponent';
import uiux from './images/ui-ux.png'
import branding from './images/branding-marketing.png'
import digital from './images/graphic-digital.png'
import animations from './images/animations.png'
import photography from './images/photography.png'
import ThreeD from './images/3D.png'

function PortfolioComponent() {
    return (
        <Container fluid className="content">
            <Row>
                <Col>
                    <SectionHeaderComponent title="portfolio" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Stack direction='vertical' gap={2}>
                        <Stack direction='horizontal' gap={2}>
                            <div className='background' style={{ "--url": `url(${uiux})` }} >
                                <div className="transbox">
                                    <p>UI/UX and web design</p>
                                </div>
                            </div>
                            <div className='background' style={{ "--url": `url(${branding})` }} >
                                <div className="transbox">
                                    <p>branding and <br /> marketing designs</p>
                                </div>
                            </div>
                        </Stack>
                        <Stack direction='horizontal' gap={2}>
                            <div className='background' style={{ "--url": `url(${digital})` }} >
                                <div className="transbox">
                                    <p>graphic designs and <br /> digital arts</p>
                                </div>
                            </div>
                            <div className='background' style={{ "--url": `url(${animations})` }} >
                                <div className="transbox">
                                    <p>animations</p>
                                </div>
                            </div>
                        </Stack>
                        <Stack direction='horizontal' gap={2}>
                            <div className='background' style={{ "--url": `url(${photography})` }} >
                                <div className="transbox">
                                    <p>photographies</p>
                                </div>
                            </div>
                            <div className='background' style={{ "--url": `url(${ThreeD})` }} >
                                <div className="transbox">
                                    <p>3D graphics</p>
                                </div>
                            </div>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
};

export default PortfolioComponent;