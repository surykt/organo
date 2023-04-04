import React from "react";
import "./Field.css";

export default function Field({
  label,
  type = "text",
  placeholder,
  required,
  value,
  valueChange,
}) {
  const handleChange = event => {
    valueChange(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
