import * as React from "react";
import "./navbar.scss";
import { Stack, Nav } from "react-bootstrap/";

function SocialLinksComponent() {
  return (
    <Nav>
      <Stack direction="horizontal" className="social-links">
        <Nav.Link
          className="social-link linkedin"
          href="https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/"
        />
        <Nav.Link
          className="social-link instagram"
          href="https://www.instagram.com/katie.design.art?igsh=MXV6aDFrNGVlNHBjdA=="></Nav.Link>
        <Nav.Link className="social-link behance" href="https://www.behance.net/KatarzynaSzymczynska"></Nav.Link>
      </Stack>
    </Nav>
  );
}

export default SocialLinksComponent;
