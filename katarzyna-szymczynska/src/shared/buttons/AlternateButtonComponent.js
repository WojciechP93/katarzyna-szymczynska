import * as React from "react";
import "./button.scss";
import { Button } from "react-bootstrap/";

function AlternateButtonComponent(props) {
  return (
    <Button className="alternate-button" variant="outline-light">
      {props.content}
    </Button>
  );
}

export default AlternateButtonComponent;
