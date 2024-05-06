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
        <Stack
          direction="horizontal"
          style={{ marginBottom: "20px", justifyContent: "space-between", marginRight: "100px" }}>
          <Image src={font.image} fluid />
          <p className="section-text" style={{ marginLeft: "80px", marginTop: "18px" }}>
            {font.name}
          </p>
        </Stack>
      ))}
    </Stack>
  );
}

export default FontsComponent;
