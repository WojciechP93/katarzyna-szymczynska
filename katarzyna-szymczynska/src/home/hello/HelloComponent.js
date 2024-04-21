import * as React from "react";
import "./hello.scss";
import video from "./images/fire.mp4";
import bigLogo from "./images/big-logo.svg";
import staticFire from "./images/static-fire.jpg";
import { Image, Stack, Container, Row, Col } from "react-bootstrap/";
import AlternateButtonComponent from "../../shared/buttons/AlternateButtonComponent";
import PrimaryButtonComponent from "../../shared/buttons/PrimaryButtonComponent";

function HelloComponent() {
  return (
    <div className="video-container">
      <video className="fire-video" loop="true" autoplay="autoplay" id="vid" muted poster={staticFire}>
        <source src={video} type="video/mp4" />
      </video>
      <div class="video-gradient-box" />
      <div class="logo-box">
        <Image className="big-logo" fluid src={bigLogo} />
      </div>
      <div class="caption-box">
        <Container fluid style={{ backgroundColor: "transparent" }}>
          <Row>
            <Col sm={12}>
              <div className="caption-margin-row" />
            </Col>
            <Col sm={12}>
              <Stack>
                <p className="hello-text">Hello!</p>
                <p className="welcome-text">Welcome to my design portfolio</p>
                <Container fluid className="buttons-container">
                  <Row>
                    <Col xs={12} className="button-column">
                      <AlternateButtonComponent content="Download CV" />
                      <PrimaryButtonComponent content="Portfolio" />
                    </Col>
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HelloComponent;
