import React from "react";
import "./DropdownList.css";

export default function DropdownList({ label, items }) {
  return (
    <div className="dropdown-list">
      <label>{label}</label>
      <select>
        {items.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
