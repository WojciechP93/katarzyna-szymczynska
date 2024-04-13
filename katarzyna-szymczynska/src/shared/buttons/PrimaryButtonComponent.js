import * as React from "react";
import "./button.scss";
import { Button } from "react-bootstrap/";

function PrimaryButtonComponent(props) {
  return (
    <Button className="primary-button" variant="light">
      {props.content}
    </Button>
  );
}

export default PrimaryButtonComponent;
