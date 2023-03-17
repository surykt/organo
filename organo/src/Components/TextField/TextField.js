import React from "react";
import "./TextField.css";

export default function TextField({ label, placeholder, required }) {

  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{label}</label>
      <input onChange={handleChange} required={required} placeholder={placeholder} />
    </div>
  );
}
