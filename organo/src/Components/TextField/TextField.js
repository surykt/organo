import React from "react";
import "./TextField.css";

export default function TextField({ label, placeholder, required, value, valueChange }) {

  const handleChange = event => {
    valueChange(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{label}</label>
      <input value={value} onChange={handleChange} required={required} placeholder={placeholder} />
    </div>
  );
}
