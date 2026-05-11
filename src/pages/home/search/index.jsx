import React, { useState } from "react";
import "./search.scss";

export const Search = ({ getCharactersQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCharactersQuery(value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="search">
        <span className="search__icon search__icon--search" />
        <input
          className="search__input"
          type="search"
          placeholder="What do you want to find?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search__button">
          <span className="search__icon search__icon--arrow" />
        </button>
      </div>
    </form>
  );
};
