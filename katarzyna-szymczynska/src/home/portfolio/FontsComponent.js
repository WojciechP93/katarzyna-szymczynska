import * as React from "react";
import { Stack, Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function FontsComponent(props) {
  return (
    <Stack>
      <p className="section-title">Fonts</p>
      {props.fonts.map((font) => (
        <Stack direction="horizontal" className="font-stack">
          <Image src={font.image} fluid />
          <p className="section-text font-title">{font.name}</p>
        </Stack>
      ))}
    </Stack>
  );
}

export default FontsComponent;
