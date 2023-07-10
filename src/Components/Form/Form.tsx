import React, { useState } from "react";
import "./Form.css";
import Field from "../Field/Field";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { INewColaborador } from "../../shared/IColaborador";

interface FormProps {
  registerEmployee: (employee: INewColaborador) => void;
  teams: string[];
  registerTeam: (newTeam: { name: string; color: string }) => void;
}

export default function Form({
  registerEmployee,
  teams,
  registerTeam,
}: FormProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("#000000");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerEmployee({
      name,
      role,
      image,
      team,
    });
    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          valueChange={value => setName(value)}
          type=""
        />
        <Field
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          valueChange={value => setRole(value)}
          type=""
        />
        <Field
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          valueChange={value => setImage(value)}
          type=""
        />
        <DropdownList
          label="Time"
          items={teams}
          value={team}
          valueChange={value => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>

      <form
        className="form"
        onSubmit={event => {
          event.preventDefault();
          registerTeam({ name: teamName, color: teamColor });
          setTeamName("");
          setTeamColor("#000000");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Field
          required
          label=" Nome do Time"
          placeholder="Digite o nome do time"
          value={teamName}
          valueChange={value => setTeamName(value)}
          type=""
        />
        <Field
          required
          type="color"
          label="Cor do Time"
          placeholder="Digite a cor do time"
          value={teamColor}
          valueChange={value => setTeamColor(value)}
        />
        <Button>Criar novo time</Button>
      </form>
    </section>
  );
}
