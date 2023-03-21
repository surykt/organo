import React from "react";
import "./Employee.css";

export default function Employee({ name, role, image }) {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={image} alt={name}></img>
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}
