import React from "react";
import { SectionStyled } from "../Wrappers";
import { SectionHeading } from "../section-heading/SectionHeading";
import { LenguajesGrid } from "./LenguajesGrid";
import { LenguajesData } from "../../data/lenguajes";
import "./Lenguajes.css";

export const Lenguajes = () => {
  return (
    <SectionStyled id={"lenguajes"} className={"encabezado"}>
      <SectionHeading title={"Lenguajes"} />
      <div className="container">
        <div className="wrapper">
          {LenguajesData.map((l) => {
            return <LenguajesGrid {...l} key={l.id} />;
          })}
        </div>
      </div>
    </SectionStyled>
  );
};
