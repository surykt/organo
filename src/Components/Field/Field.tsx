import React from "react";
import "./Field.css";

interface FieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  value: string;
  valueChange: (value: string) => void;
}

export default function Field({
  label,
  type = "text",
  placeholder,
  value,
  valueChange,
  required = false,
}: FieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
