import * as React from "react";
import { Stack, Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function GraphicsComponent(props) {
  if (props.icons !== undefined) {
    return (
      <Stack>
        <p className="section-title">Graphics</p>
        <Image fluid src={props.icons} className="icons-image" />
      </Stack>
    );
  }
}

export default GraphicsComponent;
