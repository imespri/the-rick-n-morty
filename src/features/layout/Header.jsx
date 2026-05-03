import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div>Header block</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/error-link">Вторая</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
