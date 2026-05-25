import "./Header.scss";
import { MainLogo } from "../MainLogo/MainLogo";
import { Navigation } from "../Navigation/Navigation";

export function Header({ toggleShadow }) {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <MainLogo />
        <Navigation toggleShadow={toggleShadow} />
      </div>
    </header>
  );
}
