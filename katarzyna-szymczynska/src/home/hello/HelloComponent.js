import * as React from 'react';
import "./hello.css"
import { Image, Button, Stack } from 'react-bootstrap/';
import kasia from "./home-kasia-image.svg"
import { HashLink } from 'react-router-hash-link';

function HelloComponent() {
    return (
        <Stack direction='horizontal' className="hello-content" >
            <div>
                <p className="hello-text">Hello!</p>
                <p className="about-text">
                    I am <b>Katarzyna Szymczyńska</b>,<br></br>
                    artistic soul, UI/UX and graphic<br></br>
                    designer by profession.
                </p>
                <HashLink className='static-navbar-link static-navbar-link-active' to="/home/#portfolio"><Button className="portfolio-button" href="#Section 3">PORFTOLIO</Button></HashLink>
            </div>
            <div>
                <Image src={kasia} fluid />
            </div>
        </Stack>
    );
};

export default HelloComponent;