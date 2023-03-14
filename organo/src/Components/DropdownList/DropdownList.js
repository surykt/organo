import React from "react";
import "./DropdownList.css";

export default function DropdownList(props) {
  return (
    <div>
      <select>
        {props.items.map(item => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
