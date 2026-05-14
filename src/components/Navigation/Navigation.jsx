import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export function Navigation() {
  const createLinksUI = () => {
    const links = [
      { to: "/", title: "Characters" },
      { to: "/feedback", title: "Feedback" },
      { to: "/error-link", title: "Error" },
    ];

    return links.map((item, i) => (
      <li className="navigation__item" key={`navlink-${i}`}>
        <NavLink className="navigation__link" to={item.to}>
          {item.title}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">{createLinksUI()}</ul>
    </nav>
  );
}
