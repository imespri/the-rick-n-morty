import "./MainLogo.scss";
import { Link } from "react-router-dom";

export function MainLogo() {
  return (
    <Link to="/">
      <span className="main-logo" />
    </Link>
  );
}
