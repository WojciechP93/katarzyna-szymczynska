import * as React from 'react';
import "./section-header.css";
import { Stack } from 'react-bootstrap/';

function SectionHeaderComponent(props) {
    return (
        <Stack>
            <p className='title'>{props.title}</p>
            <p className='description'>{props.description}</p>
        </Stack>
    );
};

export default SectionHeaderComponent;