import React from "react";

import { SectionHeading } from "../section-heading/SectionHeading";
import { Formulario } from "./Formulario";
import { SectionStyled } from "../Wrappers";

import "./Contacto.css";

export const Contacto = () => {
  return (
    <SectionStyled id={"contacto"} className={"encabezado"}>
      <SectionHeading title={"Contacto"} />
      <div className="container">
        <Formulario />
      </div>
    </SectionStyled>
  );
};
