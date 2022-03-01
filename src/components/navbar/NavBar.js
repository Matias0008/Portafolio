import React, { useEffect, useState } from "react";

import { FaSun, FaMoon } from "react-icons/fa";
import { VscChromeClose, VscThreeBars } from "react-icons/vsc";

import { NavElements } from "./NavElements";

import "./NavBar.css";

export const NavBar = () => {
  const [state, setState] = useState({
    clicked: false,
    theme: "light",
  });

  const handleClick = () => {
    setState({
      ...state,
      clicked: !state.clicked,
    });
  };

  const handleTheme = () => {
    setState({
      ...state,
      theme: state.theme === "light" ? "dark" : "light",
    });
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setState({ ...state, theme: theme });
    }
  }, []);

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="tema">
            <button
              className={
                "switch" + " " + (state.theme === "dark" ? "active" : "")
              }
              onClick={handleTheme}
            >
              <span>
                <FaSun />
              </span>
              <span>
                <FaMoon />
              </span>
            </button>
          </div>
          <div>
            <button className="nav-toggle" onClick={handleClick}>
              {state.clicked ? <VscChromeClose /> : <VscThreeBars />}
            </button>
          </div>
          <ul className={state.clicked ? "nav-menu_visible" : "nav-menu"}>
            <NavElements handleClick={handleClick} clicked={state.clicked} />
          </ul>
        </nav>
      </div>
    </header>
  );
};
