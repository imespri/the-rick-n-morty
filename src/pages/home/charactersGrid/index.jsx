import React from "react";
import "./characters-grid.scss";
import { CharacterCard } from "../characterCard";

export const CharactersGrid = ({ characters }) => {
  const cards = characters.map((item) => {
    return <CharacterCard key={item.id} character={item} />;
  });

  return <div className="wrapper characters-grid">{cards}</div>;
};
