import * as React from 'react';
import SectionHeaderComponent from '../../shared/section_header/SectionHeaderComponent';
import { Container, Row, Stack, Breadcrumb, Image } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import GalleryResponsiveMasonryComponent from './GalleryResponsiveMasonryComponent';
import NavbarComponent from '../../navbar/NavbarComponent'

function EquiAppComponent(props) {

    return (
        <Container fluid>
            <NavbarComponent />
            <Row>
                <Stack className='portfolio-subject-container'>
                    <Stack direction='horizontal' gap={3}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/home"><Link to="/home">porftolio</Link></Breadcrumb.Item>
                            <Breadcrumb.Item href={"/portfolio/" + props.subjectPath}><Link to="/portfolio/ui-ux-and-web-design-component">{props.subjectName}</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Stack>
                    <Stack>
                        <SectionHeaderComponent title="EquiApp" description="Design of a mobile application for horse riding enthusiasts, diploma design." />
                        <GalleryResponsiveMasonryComponent images={props.images} />
                    </Stack>
                </Stack>
            </Row>
        </Container>
    );
}

export default EquiAppComponent;