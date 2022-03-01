import React from "react";
import "./NavBar.css";

const Links = [
  {
    name: "Inicio",
    href: "#inicio",
  },
  {
    name: "Sobre mi",
    href: "#sobre-mi",
  },
  {
    name: "Lenguajes",
    href: "#lenguajes",
  },
  {
    name: "Proyectos",
    href: "#proyectos",
  },
  {
    name: "Contacto",
    href: "#contacto",
  },
];

export const NavElements = ({ handleClick, clicked }) => {
  return (
    <>
      {Links.map(({ name, href }) => {
        return (
          <li className="nav-menu-item" key={name}>
            <a
              href={href}
              className="nav-menu-link"
              onClick={clicked ? handleClick : undefined}
            >
              {name}
            </a>
          </li>
        );
      })}
    </>
  );
};
