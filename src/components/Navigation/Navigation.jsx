import "./Navigation.scss";
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import { useShadow } from "@/components/AppLayout/AppLayout";
import { NavLink, useLocation } from "react-router-dom";

export function Navigation() {
  const { isShadowActive, openShadow, hideShadow } = useShadow();
  const location = useLocation();
  const prevLocationRef = useRef(location);

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

  useEffect(() => {
    if (location !== prevLocationRef && isMenuOpen) {
      toggleMenu();
    }
  }, [location]);

  const createLinksUI = () => {
    const links = [
      { to: "/", title: "Characters" },
      { to: "/locations", title: "Locations" },
      { to: "/error-link", title: "Episodes" },
      { to: "/feedback", title: "Feedback" },
      { to: "/error-link", title: "Project Info" },
    ];

    return links.map((item, i) => (
      <li className="navigation__item" key={`navlink-${i}`}>
        <NavLink
          className={({ isActive }) =>
            classNames("navigation__link", {
              "navigation__link--active": isActive,
            })
          }
          to={item.to}
        >
          {item.title}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className="navigation">
      <span
        className={`navigation__icon${isMenuOpen ? ` navigation__icon--open` : ``}`}
        onClick={toggleMenu}
      />
      <ul
        className={`navigation__list${isMenuOpen ? ` navigation__list--open` : ``}`}
      >
        {createLinksUI()}
      </ul>
    </nav>
  );
}
