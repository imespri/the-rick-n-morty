import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/error-link">
            Вторая
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
