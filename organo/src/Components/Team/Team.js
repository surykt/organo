import React from "react";
import Employee from "../Employee/Employee";
import "./Team.css";

export default function Team({ team, employees }) {
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: team.secondaryColor,
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
        <div className="employees">
          {employees.map((employee, id) => {
            console.log(
              <Employee
                key={id}
                employee={employee}
                backgroundColor={team.primaryColor}
              />,
            );
            return (
              <Employee
                key={id}
                employee={employee}
                backgroundColor={team.primaryColor}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
