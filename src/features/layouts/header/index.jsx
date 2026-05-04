import React from "react";
import { Navigation } from "../../../shared/components/navigation";
import { Logo } from "../../../shared/components/logo";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
