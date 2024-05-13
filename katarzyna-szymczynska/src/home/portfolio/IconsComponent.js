import * as React from "react";
import { Stack, Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function IconsComponent(props) {
  return (
    <Stack>
      <p className="section-title">Icons</p>
      <Image fluid src={props.icons} style={{ maxWidth: "430px" }} />
    </Stack>
  );
}

export default IconsComponent;