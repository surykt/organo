import React from "react";
import "./Employee.css";

export default function Employee({ name, role, image, deleteEmployee}) {
  return (
    <div className="employee">
      <div className="header">
        <img src={image} alt={name}></img>
      </div>
      <div className="footer-card">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <button className="delete-btn" onClick={deleteEmployee}>Deletar Card</button>
      </div>
    </div>
  );
}
