import "./MainLogo.scss";
import { NavLink } from "react-router-dom";

export function MainLogo() {
  return (
    <NavLink to="/?page=1&name=">
      <span className="main-logo" />
    </NavLink>
  );
}
