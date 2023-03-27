import React from "react";
import Employee from "../Employee/Employee";
import "./Team.css";

export default function Team({
  title,
  primaryColor,
  secondaryColor,
  employees,
  deleteEmployee,
  changeColor,
  teamId,
}) {
  const handleChange = e => {
    changeColor(teamId, e.target.value);
  };

  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: secondaryColor,
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          value={secondaryColor}
          onChange={handleChange}
          placeholder="Personalize a cor de fundo do seu time"
        />
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>
        <div className="employees">
          {employees.map(employee => {
            return (
              <Employee
                key={employee.name}
                name={employee.name}
                image={employee.image}
                role={employee.role}
                deleteEmployee={deleteEmployee}
                backgroundColor={primaryColor}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
