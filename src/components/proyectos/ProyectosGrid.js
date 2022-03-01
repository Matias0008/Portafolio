import React from "react";
import { Proyectos } from "../../data/proyectos";

export const ProyectosGrid = () => {
  return Proyectos.map(({ name, subtitle, image, desc, url }) => {
    return (
      <div className="item" key={name}>
        <div className="left">
          <div className="img">
            <img src={image} alt={name} />
          </div>
        </div>
        <div className="right">
          <h2 className="project-title">{name}</h2>
          <h3 className="project-subtitle">{subtitle}</h3>
          <p className="proyect-paragraph">{desc}</p>
          <div className="button">
            <a
              href={url}
              target={"_blank"}
              rel="noreferrer"
              className={"btn-primary outline external-link"}
            >
              <span>Ver web</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  });
};
