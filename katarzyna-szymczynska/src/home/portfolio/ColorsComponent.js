import * as React from "react";
import { Stack } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./portfolio.scss";

function ColorsComponent(props) {
  return (
    <Stack>
      <p className="section-title">Colors</p>
      <Stack>
        {props.colors.map((color) => (
          <Stack direction="horizontal" style={{ justifyContent: "space-between", marginRight: "100px" }}>
            <div
              style={{
                width: "66px",
                height: "66px",
                borderRadius: "8px",
                backgroundColor: color.code,
                borderColor: "rgba(255, 255, 255, 1)",
                borderWidth: "1px",
              }}
            />
            <p className="section-text" style={{ marginLeft: "80px", marginTop: "18px", textAlign: "right" }}>
              {color.name} <br />
              {color.code}
            </p>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ColorsComponent;
