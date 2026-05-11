import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { CharactersGrid } from "./charactersGrid";
import "./home.scss";
import { Spinner } from "../../shared/components/spinner";

export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();

      setCharacters(data.results);
      setLoading(false);
    }

    getCharacters();
  }, []);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search />
      </div>
      {loading ? <Spinner /> : <CharactersGrid characters={characters} />}
    </>
  );
};
