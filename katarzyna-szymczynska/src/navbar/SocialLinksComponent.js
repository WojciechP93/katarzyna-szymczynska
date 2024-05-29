import * as React from "react";
import "./navbar.scss";
import { Stack, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

function SocialLinksComponent() {
  return (
    <Nav>
      <Stack direction="horizontal" className="social-links">
        <Link
          href="https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/"
          className="social-link linkedin"
          onclick='window.open("https://www.linkedin.com/in/katarzyna-szymczy%C5%84ska-72433a98/");return false;'
        />
        <Link
          className="social-link instagram"
          onclick='window.open("https://www.instagram.com/katie.design.art?igsh=MXV6aDFrNGVlNHBjdA==");return false;'
          href="https://www.instagram.com/katie.design.art?igsh=MXV6aDFrNGVlNHBjdA=="
        />
        <Link
          className="social-link behance"
          href="https://www.behance.net/KatarzynaSzymczynska"
          onclick='window.open("https://www.behance.net/KatarzynaSzymczynska");return false;'
        />
      </Stack>
    </Nav>
  );
}

export default SocialLinksComponent;
