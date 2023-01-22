import * as React from 'react';
import "./section-header.css";

function SectionHeaderComponent(props) {
    return (
        <p className='title'>{props.title}</p>
    );
};

export default SectionHeaderComponent;