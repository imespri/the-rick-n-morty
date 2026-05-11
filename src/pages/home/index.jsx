import "./home.scss";
import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { CharactersGrid } from "./charactersGrid";
import { Spinner } from "../../shared/components/spinner";
import { getCharactersByQuery } from "../../services";

export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersQuery, setCharactersQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const result = await getCharactersByQuery(charactersQuery);
      setCharacters(result.results);
      setLoading(false);
    })();
  }, [charactersQuery]);

  const getCharactersQuery = (value) => setCharactersQuery(value);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search getCharactersQuery={getCharactersQuery} />
      </div>
      {loading ? <Spinner /> : <CharactersGrid characters={characters} />}
    </>
  );
};
