import "./home.scss";
import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { CharactersGrid } from "./charactersGrid";
import { Spinner } from "../../shared/components/spinner";
import { getCharactersByQuery } from "../../services";

export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const result = await getCharactersByQuery(search);
      setCharacters(result.results);
      setLoading(false);
    })();
  }, [search]);

  const getSearch = (value) => setSearch(value);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search getSearch={getSearch} />
      </div>
      {loading ? <Spinner /> : <CharactersGrid characters={characters} />}
    </>
  );
};
