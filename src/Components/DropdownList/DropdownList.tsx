import React from "react";
import "./DropdownList.css";

interface DropdownListProps {
  label: string;
  items: string[];
  value: string;
  valueChange: (value: string) => void;
}

export default function DropdownList({
  label,
  items,
  value,
  valueChange,
}: DropdownListProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    valueChange(event.target.value);
  };

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
