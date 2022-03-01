import React from "react";

import { SectionHeading } from "../section-heading/SectionHeading";
import { SectionStyled } from "../Wrappers";
import { ProyectosGrid } from "./ProyectosGrid";

import "./Proyectos.css";

export const Proyectos = () => {
  return (
    <SectionStyled id={"proyectos"} className={"encabezado"}>
      <SectionHeading title={"Proyectos"} />
      <div className="container">
        <div className="all-items">
          <ProyectosGrid />
        </div>
      </div>
    </SectionStyled>
  );
};
