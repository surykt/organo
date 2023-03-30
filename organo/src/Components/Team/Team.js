import React from "react";
import { FaTeamspeak } from "react-icons/fa";
import Employee from "../Employee/Employee";
import "./Team.css";

export default function Team({ team, employees, changeColor, deleteEmployee }) {
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: team.secondaryColor,
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.primaryColor}
          onChange={event => changeColor(event.target.value, team.name)}
        />
        <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
        <div className="employees">
          {employees.map((employee, id) => {
            return (
              <Employee
                key={id}
                employee={employee}
                backgroundColor={team.primaryColor}
                deleteEmployee={deleteEmployee}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
