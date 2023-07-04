import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Employee.css";
import { IColaborador } from "../../shared/IColaborador";

interface EmployeeProps {
  employee: IColaborador
  backgroundColor: string
  deleteEmployee: (id: number) => void
  favoriteEmployee: (id: number) => void
}

export default function Employee({
  employee,
  backgroundColor,
  deleteEmployee,
  favoriteEmployee,
} : EmployeeProps) {
  return (
    <div className="employee">
      <FaTrashAlt
        className="delete-btn"
        onClick={() => deleteEmployee(employee.id)}
      />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={employee.image} alt={employee.name}></img>
      </div>
      <div className="footer-card">
        <h4>{employee.name}</h4>
        <h5>{employee.role}</h5>
        <div className="favorite" onClick={() => favoriteEmployee(employee.id)}>
          {employee.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
