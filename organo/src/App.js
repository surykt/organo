import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Team from "./Components/Team/Team";

function App() {
  const [employees, setEmployees] = useState([]);

  const addNewEmployee = employee => {
    setEmployees([...employees, employee]);
  };

  function deleteEmployee() {
    console.log("employee deleted");
  }

  const [teams, setTeams] = useState([
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      name: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ]);

  const changeColor = (teamTitle, color) => {
    setTeams(
      teams.map(team =>
        team.name === teamTitle ? { ...team, secondaryColor: color } : team,
      ),
    );
  };

  return (
    <div className="App">
      <header className="banner">
        <Banner />
      </header>
      <Form
        teams={teams.map(team => team.name)}
        registerEmployee={employee => addNewEmployee(employee)}
      />
      {teams.map(team => {
        return (
          <Team
            key={team.name}
            title={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            employees={employees.filter(
              employee => employee.team === team.name,
            )}
            deleteEmployee={deleteEmployee}
            changeColor={changeColor}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
