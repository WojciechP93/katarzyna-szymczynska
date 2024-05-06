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
        <Stack
          direction="horizontal"
          style={{ marginBottom: "20px", justifyContent: "space-between", marginRight: "100px" }}>
          <Image fluid src={button.image} />
          <p className="section-text" style={{ marginTop: "18px", marginLeft: "80px" }}>
            {button.name}
          </p>
        </Stack>
      ))}
    </Stack>
  );
}

export default ButtonsComponent;
