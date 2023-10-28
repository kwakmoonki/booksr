import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick}>{props.isToggleOn ? "ON" : "OFF"}</button>
  );
}

export default Button;
