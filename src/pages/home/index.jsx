import "./home.scss";
import React, { useState, useEffect } from "react";
import { Search } from "./search";
import { CharactersGrid } from "./charactersGrid";
import { Spinner } from "../../shared/components/spinner";
import { getCharactersByQuery, getEpisodeById } from "../../services";
import CharacterModal from "./characterModal";

export const HomePage = ({ visibilityModal, openModal, closeModal }) => {
  // Search
  const [characters, setCharacters] = useState([]);
  const [charactersQuery, setCharactersQuery] = useState("");

  // By ID
  const [characterId, setCharacterId] = useState(null);
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

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
    const value = characters.filter((item) => item.id === id)[0];
    setCharacter(value);
    setCharacterId(value.id);
  };

  useEffect(() => {
    (async () => {
      {
        const filterData = (obj) => {
          return {
            episode: obj.episode,
            name: obj.name,
            airDate: obj.air_date,
          };
        };

        if (character !== null) {
          let firstEpisode = character.episode[0];
          let lastEpisode = character.episode[character.episode.length - 1];

          firstEpisode = firstEpisode.split("/");
          firstEpisode = firstEpisode[firstEpisode.length - 1];

          lastEpisode = lastEpisode.split("/");
          lastEpisode = lastEpisode[lastEpisode.length - 1];

          const episodes = `${firstEpisode},${lastEpisode}`;

          const res = await getEpisodeById(episodes);
          const a = res.map((item) => filterData(item));
          setEpisodes(a);
        }
      }
    })();
  }, [characterId]);

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
      {visibilityModal && (
        <CharacterModal
          character={character}
          closeModal={closeModal}
          episodes={episodes}
        />
      )}
    </>
  );
};
