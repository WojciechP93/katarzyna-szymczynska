import * as React from "react";
import "./navbar.scss";
import { Stack, Nav } from "react-bootstrap/";

function SocialLinksComponent() {
  return (
    <Nav>
      <Stack direction="horizontal" className="social-links">
        <a
          href="https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/"
          className="social-link linkedin"
          target="_blank"
        />
        <a
          className="social-link instagram"
          target="_blank"
          href="https://www.instagram.com/katie.design.art?igsh=MXV6aDFrNGVlNHBjdA=="
        />
        <a className="social-link behance" href="https://www.behance.net/KatarzynaSzymczynska" target="_blank" />
      </Stack>
    </Nav>
  );
}

export default SocialLinksComponent;
