import React from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";

export default function Form() {
  const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Os dados foram submitados");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          required={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropdownList label="Time" items={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
}
