import * as React from "react";
import { Stack } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function ProjectInfoComponent(props) {
  return (
    <Stack>
      {props.info.map((data) => (
        <Stack>
          <p className="section-title">{data.header}</p>
          <ul className="section-text project-info-text">
            {data.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </Stack>
      ))}
    </Stack>
  );
}

export default ProjectInfoComponent;
