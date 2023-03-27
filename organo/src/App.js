import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Team from "./Components/Team/Team";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ]);

  const changeColor = (teamId, color) => {
    setTeams(
      teams.map(team =>
        team.name === teamId ? { ...team, secondaryColor: color } : team,
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
            key={team.id}
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
