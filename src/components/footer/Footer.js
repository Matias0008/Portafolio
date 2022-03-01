import React from "react";
import logo from "../../img/icons/logo.svg";
import { BsInstagram, BsGithub } from "react-icons/bs";

import "./Footer.css";
import { SectionStyled } from "../Wrappers";
export const Footer = () => {
  return (
    <SectionStyled id={"footer"}>
      <div className="container">
        <footer>
          <div className="footer-item">
            <img src={logo} alt="Logo del portafolio" />
          </div>
          <div className="footer-item">Gracias por ver!</div>
          <div className="footer-item ciudad">
            <a
              href="https://www.google.com/maps/place/Villa+Mar%C3%ADa,+C%C3%B3rdoba/data=!4m2!3m1!1s0x95cc42fb51306dc1:0xbfb3fffbd425c6b1?sa=X&amp;ved=2ahUKEwjU4LW51uP1AhXWHbkGHULTCYQQ8gF6BAgfEAE "
              target="_blank"
            >
              Villa María, Córdoba, Argentina
            </a>
          </div>
          <div className="footer-item">
            <a
              href="https://www.instagram.com/mmatidelga2"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              className="last-link"
              href="https://github.com/Matias0008"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </footer>
      </div>
    </SectionStyled>
  );
};
