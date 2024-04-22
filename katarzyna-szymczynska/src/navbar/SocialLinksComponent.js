import * as React from "react";
import "./navbar.scss";
import { Stack, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

function SocialLinksComponent() {
  return (
    <Nav>
      <Stack direction="horizontal" className="social-links">
        <Link
          to="https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/"
          className="social-link linkedin"
          target="_blank"
        />
        <Link
          className="social-link instagram"
          target="_blank"
          to="https://www.instagram.com/katie.design.art?igsh=MXV6aDFrNGVlNHBjdA=="
        />
        <Link className="social-link behance" to="https://www.behance.net/KatarzynaSzymczynska" target="_blank" />
      </Stack>
    </Nav>
  );
}

export default SocialLinksComponent;
