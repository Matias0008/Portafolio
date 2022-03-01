import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

import { SectionHeading } from "../section-heading/SectionHeading";

import imagen from "../../img/about-photo.png";

import "./SobreMi.css";
import { SectionStyled } from "../Wrappers";
export const SobreMi = () => {
  return (
    <SectionStyled id={"sobre-mi"} className={"encabezado"}>
      <SectionHeading title={"Sobre mi"} />
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="card">
              <div className="img">
                <img src={imagen} alt="Matias Delgado foto" />
              </div>
              <div className="card-desc">
                <p>
                  Desarrollador web en proceso, desde Argentina. Principalmente
                  autodidacta, disfruto programar y progresar día tras día.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="desc">
              <h2 className="nombre">Matias Delgado</h2>
              <h2 className="title">Estudiante y autodidacta</h2>
              <p className="desc-p">
                Estoy estudiando la carrera Ing. en Sistemas. Estoy dispuesto a
                dar todo de mi con el fin de superarme día tras día en este
                increible mundo de la programación. Aspiro a desarrollar mis
                aptitudes, obtener una posición para participar y colaborar a mi
                experiencia. Constantemente me encuentro aprendiendo y
                desarrollando aplicaciones por placer.
              </p>
              <div className="social">
                <div>
                  <a href="#contact" className="button">
                    Contacto
                  </a>
                </div>
                <a
                  href="https://www.instagram.com/mmatidelga2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://github.com/Matias0008"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  );
};
