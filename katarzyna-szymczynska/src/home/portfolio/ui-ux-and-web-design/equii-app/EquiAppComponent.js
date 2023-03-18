import * as React from 'react';
import "./equi-app.css";
import SectionHeaderComponent from '../../../../shared/section_header/SectionHeaderComponent';
import { Container, Row, Stack, Breadcrumb, Image } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import PortfolioGalleryComponent from '../../PortfolioGalleryComponent';
import EquiAPP_1 from './images/EquiAPP_1.png';
import EquiAPP_2 from './images/EquiAPP_2.png';
import EquiAPP_3 from './images/EquiAPP_3.png';
import EquiAPP_4 from './images/EquiAPP_4.png';
import EquiAPP_5 from './images/EquiAPP_5.png';
import EquiAPP_6 from './images/EquiAPP_6.png';
import EquiAPP_7 from './images/EquiAPP_7.png';
import EquiAPP_8 from './images/EquiAPP_8.jpg';

function EquiAppComponent() {
    const images = [EquiAPP_1, EquiAPP_2, EquiAPP_3, EquiAPP_4, EquiAPP_5, EquiAPP_6, EquiAPP_7, EquiAPP_8]
    return (
        <Container fluid>
            <Row>
                <Stack className='ui-ux-container'>
                    <Stack direction='horizontal' gap={3}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/home"><Link to="/home">porftolio</Link></Breadcrumb.Item>
                            <Breadcrumb.Item href="/portfolio/ui-ux-and-web-design-component"><Link to="/portfolio/ui-ux-and-web-design-component">UI/UX and web design</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Stack>
                    <Stack>
                        <SectionHeaderComponent title="EquiApp" description="Design of a mobile application for horse riding enthusiasts, diploma design." />
                        <PortfolioGalleryComponent images={images} />
                    </Stack>
                </Stack>
            </Row>
        </Container>
    );
}

export default EquiAppComponent;