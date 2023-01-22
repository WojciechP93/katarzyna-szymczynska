import * as React from 'react';
import './about-me.css'
import { Stack, Image } from 'react-bootstrap/';
import SectionHeaderComponent from '../shared/section_header/SectionHeaderComponent';
import vector from "./about-me-vector.svg";

function AboutMeComponent() {
    return (
        <Stack className="aboutme-content">
            <SectionHeaderComponent title="about me" />
            <p className="aboutme-text">
                In 2019 I finished studies at <b>Aademy of Fine Arts in Lodz</b>, Poland.
                Immediately after graduation, I started working as a UI/UX designer in a small startup.
                I am currently working in a similar position in a large company.
                Apart from UI and UX I'm working in area of desktop publishing,
                illustrations and animations, digital painting, 3D modeling, photography and traditional art.
            </p>
            <Image className='about-me-vector' src={vector} />
        </Stack>
    );
};

export default AboutMeComponent;