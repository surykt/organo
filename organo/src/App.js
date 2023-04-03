import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Team from "./Components/Team/Team";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82cffa",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#a6d157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#e06b69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#db6ebf",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#ffba05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#ff8a29",
    },
  ]);

  const initial = [
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [employees, setEmployees] = useState(initial);

  function changeTeamColor(color, name) {
    setTeams(
      teams.map(team => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      }),
    );
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  return (
    <div className="App">
      <header className="banner">
        <Banner />
      </header>
      <Form
        teams={teams.map(team => team.name)}
        registerEmployee={employee => setEmployees([...employees, employee])}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {teams.map((team, id) => {
          return (
            <Team
              key={id}
              team={team}
              employees={employees.filter(
                employee => employee.team === team.name,
              )}
              changeColor={changeTeamColor}
              deleteEmployee={deleteEmployee}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
