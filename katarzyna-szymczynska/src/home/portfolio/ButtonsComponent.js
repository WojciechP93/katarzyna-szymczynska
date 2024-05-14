import * as React from "react";
import { Stack, Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function ButtonsComponent(props) {
  return (
    <Stack>
      <p className="section-title">Buttons</p>
      {props.buttons.map((button) => (
        <Stack direction="horizontal" className="button-stack">
          <Image fluid src={button.image} />
          <p className="section-text button-title">{button.name}</p>
        </Stack>
      ))}
    </Stack>
  );
}

export default ButtonsComponent;
