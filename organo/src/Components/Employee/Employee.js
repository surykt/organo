import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Employee.css";

export default function Employee({
  employee,
  backgroundColor,
  deleteEmployee,
}) {
  return (
    <div className="employee">
      <FaTrashAlt className="delete-btn" onClick={()=> deleteEmployee(employee.id)} />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={employee.image} alt={employee.name}></img>
      </div>
      <div className="footer-card">
        <h4>{employee.name}</h4>
        <h5>{employee.role}</h5>
      </div>
    </div>
  );
}
