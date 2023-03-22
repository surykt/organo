import React from "react";
import Employee from "../Employee/Employee";
import "./Team.css";

export default function Team({
  title,
  primaryColor,
  secondaryColor,
  employees,
}) {
  return (
    employees.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{title}</h3>
        <div className="employees">
          {employees.map(employee => {
            return (
              <Employee
                key={employee.name}
                name={employee.name}
                image={employee.image}
                role={employee.role}
                background={primaryColor}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
