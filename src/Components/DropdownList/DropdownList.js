import React from "react";
import "./DropdownList.css";

export default function DropdownList({ label, items, value, valueChange }) {

  const handleChange = event => {
    valueChange(event.target.value)
  }

  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select onChange={handleChange} value={value}>
        <option value=""></option>
        {items.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
