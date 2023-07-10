import React from "react";
import Employee from "../Employee/Employee";
import "./Team.css";
import hexToRgba from "hex-to-rgba";
import { IColaborador } from "../../shared/IColaborador";

interface TeamProps {
  employeeTeam: {
    name: string;
    color: string;
  };
  employees: IColaborador[];
  changeColor: (value: string, name: string) => void;
  deleteEmployee: (id?: string) => void;
  favoriteEmployee: (id?: string) => void;
}

export default function Team({
  employeeTeam,
  employees,
  changeColor,
  deleteEmployee,
  favoriteEmployee,
}: TeamProps) {
  return (
    employees.length > 0 && (
      <section
        className="team"
        style={{
          backgroundColor: hexToRgba(employeeTeam.color, 0.2),
          backgroundImage: "url(/images/fundo.png)",
        }}
      >
        <input
          type="color"
          className="input-color"
          value={employeeTeam.color}
          onChange={event => changeColor(event.target.value, employeeTeam.name)}
        />
        <h3 style={{ borderColor: employeeTeam.color }}>{employeeTeam.name}</h3>
        <div className="employees">
          {employees.map((employee, id) => {
            return (
              <Employee
                key={id}
                employee={employee}
                backgroundColor={employeeTeam.color}
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
