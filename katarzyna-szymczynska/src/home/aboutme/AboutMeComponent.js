import * as React from "react";
import "./about-me.scss";
import { Stack, Image, Container, Row, Col } from "react-bootstrap/";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import photo from "./images/kasia-photo.png";

function AboutMeComponent() {
  return (
    <Stack className="aboutme-content">
      <SectionHeaderComponent title="about me" />
      <Container fluid>
        <Row className="aboutme-row">
          <Image src={photo} className="kasia-photo" />
          <p className="aboutme-text">
            I'm Katarzyna Szymczyńska and I work as a <b>UI/UX designer</b>. Graduated from the Academy of Fine Arts in
            Łódź in 2019, specializing in Graphic Design. I excel in diverse creative fields like{" "}
            <b>desktop publishing, digital painting, 2D animation, photography, and traditional art</b>, bringing a
            unique perspective to my work.
            <br />
            <br />
            Additionally, <b>I train and mentor</b> aspiring designers in UI/UX, enhancing their skills. Currently, I'm
            broadening my expertise by mastering tools like Webflow and Shopify, alongside learning the fundamentals of
            CSS and HTML for web development.
          </p>
        </Row>
      </Container>
    </Stack>
  );
}

export default AboutMeComponent;
