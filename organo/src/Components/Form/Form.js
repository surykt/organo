import React from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import DropdownList from "../DropdownList/DropdownList";

export default function () {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Designer",
    "Mobile",
    "Inovação Gestão",
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropdownList items={times} />
      </form>
    </section>
  );
}
