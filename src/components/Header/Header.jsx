import "./Header.scss";
import { MainLogo } from "../MainLogo/MainLogo";
import { Navigation } from "../Navigation/Navigation";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <MainLogo />
        <Navigation />
      </div>
    </header>
  );
}
