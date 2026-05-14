import "./CharactersSearch.scss";
import { useState } from "react";

export function CharactersSearch({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  return (
    <form className="characters-search" action="" onSubmit={handleSubmit}>
      <span className="characters-search__icon characters-search__icon--search" />
      <input
        className="characters-search__input"
        type="search"
        name="charactersSearch"
        placeholder="What do you want to find?"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="characters-search__button">
        <span className="characters-search__icon characters-search__icon--arrow" />
      </button>
    </form>
  );
}
