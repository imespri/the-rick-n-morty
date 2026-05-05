import React from "react";
import "./search.scss";

export const Search = () => {
  return (
    <div className="search">
      <span className="search__icon search__icon--search" />
      <input
        className="search__input"
        type="search"
        placeholder="What do you want to find?"
      />
      <button className="search__button">
        <span className="search__icon search__icon--arrow" />
      </button>
    </div>
  );
};
