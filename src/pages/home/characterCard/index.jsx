import React from "react";
import "./character-card.scss";

export const CharacterCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  );
};
