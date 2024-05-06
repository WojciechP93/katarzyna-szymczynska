import * as React from "react";
import { Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function SkillImageComponent(props) {
  return (
    <div className="skill-image-container">
      <Image src={props.image} className="skill-image" />
    </div>
  );
}

export default SkillImageComponent;
