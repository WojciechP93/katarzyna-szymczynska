import * as React from "react";
import "./contact.scss";
import { Stack, Container, Row, Col, Button } from "react-bootstrap/";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import SocialLinksComponent from "../../navbar/SocialLinksComponent";
import AlternateButtonComponent from "../../shared/buttons/AlternateButtonComponent";
import { Link } from "react-router-dom";

function ContactComponent() {
  return (
    <Stack className="contact-stack">
      <div>
        <SectionHeaderComponent title="contact me" />
      </div>
      <div>
        <p className="contact-text">
          Are you interested in cooperation? <br />
          Contact me!
        </p>
        <p className="contact-text">
          tel: +48 792 940 810 <br />
          e-mail: k.szymczynska@yahoo.pl
        </p>
        <SocialLinksComponent />
      </div>

      <div className="button-div">
        <Link to="https://drive.google.com/file/d/1wtnldRxAFiJ1qcudpMMS5AbLwS40-1gI/view" target="_blank">
          <AlternateButtonComponent content="Download CV" />
        </Link>
      </div>
    </Stack>
  );
}

export default ContactComponent;
