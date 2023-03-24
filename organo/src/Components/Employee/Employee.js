import React from "react";
import { FaTrashAlt } from 'react-icons/fa'
import "./Employee.css";

export default function Employee({ name, role, image, deleteEmployee}) {
  return (
    <div className="employee">
      <FaTrashAlt className="delete-btn" onClick={deleteEmployee}/>
      <div className="header">
        <img src={image} alt={name}></img>
      </div>
      <div className="footer-card">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}
