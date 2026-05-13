import "./Characters.scss";
import { useState, useEffect } from "react";
import { CharactersSearch } from "./CharactersSearch/CharactersSearch";
import { CharactersGrid } from "./CharactersGrid/CharactersGrid";
import { CharacterModal } from "./CharacterModal/CharacterModal";
import { Spinner } from "@/components/Spinner/Spinner";
import { Shadow } from "@/components/Shadow/Shadow";
import { fetchCharactersByQuery, fetchEpisodesById } from "@/services";

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);

      const data = await fetchCharactersByQuery(query);

      Array.isArray(data.results)
        ? setCharacters(data.results)
        : alert("Not found"); // TODO Временная затычка

      setLoading(false);
    })();
  }, [query]);

  const getQuery = (value) => setQuery(value);

  // -----------------------------
  const [visibilityModal, setVisibilityModal] = useState(false);

  const openModal = () => setVisibilityModal(true);
  const closeModal = () => setVisibilityModal(false);

  // By ID
  const [characterId, setCharacterId] = useState(null);
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  // Additional
  const [loading, setLoading] = useState(true);

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

          const res = await fetchEpisodesById(episodes);
          const a = res.map((item) => filterData(item));
          setEpisodes(a);
        }
      }
    })();
  }, [characterId]);
  // -----------------------------

  return (
    <div className="characters">
      <div className="characters__promo">
        <h1 className="characters__header">The Rick and Morty</h1>
        <CharactersSearch getQuery={getQuery} />
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
          episodes={episodes}
          closeModal={closeModal}
        />
      )}
      {visibilityModal && <Shadow closeModal={closeModal} />}
    </div>
  );
}
