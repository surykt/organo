import React from "react";
import "./DropdownList.css";

export default function DropdownList(props) {
  return (
    <div>
      <select>
        {props.items.map(item => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
