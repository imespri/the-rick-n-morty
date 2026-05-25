import "./Navigation.scss";
import { useState, useEffect } from "react";
import { useShadow } from "@/components/AppLayout/AppLayout";
import { NavLink } from "react-router-dom";

export function Navigation() {
  const { isShadowActive, openShadow, hideShadow } = useShadow();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen ? hideShadow() : openShadow();
  };

  useEffect(() => {
    if (isMenuOpen && !isShadowActive) {
      setIsMenuOpen(!isMenuOpen);
    }
  }, [isShadowActive]);

  const createLinksUI = () => {
    const links = [
      { to: "/", title: "Characters" },
      { to: "/error-link", title: "Locations" },
      { to: "/error-link", title: "Episodes" },
      { to: "/feedback", title: "Feedback" },
      { to: "/error-link", title: "Project Info" },
    ];

    return links.map((item, i) => (
      <li className="navigation__item" key={`navlink-${i}`}>
        <NavLink className="navigation__link" to={item.to} onClick={toggleMenu}>
          {item.title}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className="navigation">
      <span
        className={`navigation__icon ${isMenuOpen && `navigation__icon--open`}`}
        onClick={toggleMenu}
      />
      <ul
        className={`navigation__list ${isMenuOpen && `navigation__list--open`}`}
      >
        {createLinksUI()}
      </ul>
    </nav>
  );
}
