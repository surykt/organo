import React from "react";
import Employee from "../Employee/Employee";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

export default function Team({
  team,
  employees,
  changeColor,
  deleteEmployee,
  favoriteEmployee,
}) {
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(team.color, 0.2),
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          type="color"
          className="input-color"
          value={team.color}
          onChange={event => changeColor(event.target.value, team.name)}
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="employees">
          {employees.map((employee, id) => {
            return (
              <Employee
                key={id}
                employee={employee}
                backgroundColor={team.color}
                deleteEmployee={deleteEmployee}
                favoriteEmployee={favoriteEmployee}
              />
            );
          })}
        </div>
      </section>
    )
  );
}
