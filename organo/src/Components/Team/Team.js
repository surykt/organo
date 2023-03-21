import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
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
    <section className="team" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{title}</h3>
      {employees.map(employee => {
        return (
          <Employee
            name={employee.name}
            image={employee.image}
            role={employee.role}
          />
        );
      })}
    </section>
  );
}
