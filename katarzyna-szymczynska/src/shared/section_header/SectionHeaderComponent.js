import * as React from "react";
import "./section-header.scss";
import { Stack } from "react-bootstrap/";

function SectionHeaderComponent(props) {
  return (
    <Stack>
      <p className="title">{props.title}</p>
    </Stack>
  );
}

export default SectionHeaderComponent;
