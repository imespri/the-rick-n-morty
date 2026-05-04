import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

export const Logo = () => {
  return (
    <Link to="/">
      <span className="logo" />
    </Link>
  );
};
