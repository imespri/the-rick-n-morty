import "./home.scss";
import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { CharactersGrid } from "./charactersGrid";
import { Spinner } from "../../shared/components/spinner";
import { getCharactersByQuery } from "../../services";

export const HomePage = ({ visibilityModal, openModal, closeModal }) => {
  // Search
  const [characters, setCharacters] = useState([]);
  const [charactersQuery, setCharactersQuery] = useState("");

  // By ID
  const [characterId, setCharacterId] = useState(null);
  const [character, setCharacter] = useState(null);

  // Additional
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const result = await getCharactersByQuery(charactersQuery);

      Array.isArray(result.results)
        ? setCharacters(result.results)
        : alert("Not found"); // TODO Временная затычка

      setLoading(false);
    })();
  }, [charactersQuery]);

  const getCharactersQuery = (value) => setCharactersQuery(value);

  const getCharacterId = (id) => {
    const value = characters.filter((item) => item.id === id);
    setCharacter(value);
  };

  console.log(character);

  return (
    <>
      <div className="promo">
        <h1 className="promo__header">The Rick and Morty</h1>
        <Search getCharactersQuery={getCharactersQuery} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <CharactersGrid
          characters={characters}
          getCharacterId={getCharacterId}
          openModal={openModal}
        />
      )}
    </>
  );
};
