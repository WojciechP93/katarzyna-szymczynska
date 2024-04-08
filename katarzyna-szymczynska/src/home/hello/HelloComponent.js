import * as React from "react";
import "./hello.css";
import video from "./images/fire.mp4";
import bigLogo from "./images/big-logo.svg";
import { Image, Button, Stack, Container, Row, Col } from "react-bootstrap/";
import { HashLink } from "react-router-hash-link";

function HelloComponent() {
  return (
    <div class="video-container">
      <video loop="true" autoplay="autoplay" id="vid" muted>
        <source src={video} />
      </video>
      <div class="box" />
      <div class="logo-box">
        <Image className="big-logo" fluid src={bigLogo} />
      </div>
      <div class="caption-box">
        <Stack>
          <p className="hello-text">Hello!</p>
          <p className="welcome-text">Welcome to my design portfolio</p>
          <Container fluid className="buttons-container">
            <Row>
              <Col xs={12} className="button-column">
                <Button className="download-button" variant="outline-light">
                  Download CV
                </Button>
                <Button className="portfolio-button" variant="light">
                  Portfolio
                </Button>
              </Col>
            </Row>
          </Container>
        </Stack>
      </div>
    </div>
  );
}

export default HelloComponent;
