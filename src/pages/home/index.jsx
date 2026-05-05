import React from "react";
import { Search } from "./search";
import "./home.scss";

export const HomePage = () => {
  return (
    <div className="promo">
      <h1 className="promo__header">The Rick and Morty</h1>
      <Search />
    </div>
  );
};
