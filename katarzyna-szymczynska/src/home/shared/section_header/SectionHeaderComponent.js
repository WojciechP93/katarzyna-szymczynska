import * as React from 'react';
import "./section-header.css";

function SectionHeaderComponent(props) {
    return (
        <>
            <div className="title">{props.title}</div>
        </>
    );
};

export default SectionHeaderComponent;