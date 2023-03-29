import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Team from "./Components/Team/Team";
import { v4 as uuidv4 } from "uuid";

function App() {
  const teams = [
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
  ];

  const initial = [
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ];

  const [employees, setEmployees] = useState(initial);

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
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
