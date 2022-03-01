import React from "react";

import { SectionStyled } from "../Wrappers";
import { Titulo } from "./Titulo";

import "./Inicio.css";

export const Inicio = () => {
  return (
    <SectionStyled id={"inicio"} className={"encabezado"}>
      <div className="container">
        <Titulo />
      </div>
    </SectionStyled>
  );
};
