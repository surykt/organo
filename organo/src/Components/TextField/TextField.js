import React from "react";
import "./TextField.css";

export default function TextField({ label, placeholder, required }) {
  return (
    <div className="text-field">
      <label>{label}</label>
      <input required={required} placeholder={placeholder} />
    </div>
  );
}
