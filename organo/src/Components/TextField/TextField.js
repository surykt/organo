import React from "react";
import "./TextField.css";

export default function TextField(props) {
  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}
