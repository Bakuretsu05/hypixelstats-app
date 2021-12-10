import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="Modal" style={props.position && props.position}>
      <div className="Modal__error-title-container">
        <h4 className="Modal__error-title">Error:</h4>
      </div>
      <h4 className="Modal__text">{props.text}</h4>
    </div>
  );
}
