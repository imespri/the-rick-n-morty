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
  const [cardId, setCardId] = useState(null);
  const [characterWithEpisodes, setCharacterWithEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search Characters
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

  const handleCardClick = (id) => setCardId(id);

  useEffect(() => {
    (async () => {
      const character = characters.find((item) => item.id === cardId);

      const getId = (item) => {
        const a = item.split("/");
        return a[a.length - 1];
      };

      if (cardId !== null) {
        const first = getId(character.episode[0]);
        const last = getId(character.episode[character.episode.length - 1]);
        const ids = `${first},${last}`;

        const episodes = await fetchEpisodesById(ids);

        setCharacterWithEpisodes({ character, episodes });

        openModal();
      }
    })();
  }, [cardId]);

  // -----------------------------
  // -----------------------------
  // -----------------------------
  // -----------------------------
  // -----------------------------
  const [visibilityModal, setVisibilityModal] = useState(false);

  const openModal = () => setVisibilityModal(true);
  const closeModal = () => setVisibilityModal(false);

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
          handleCardClick={handleCardClick}
        />
      )}
      {visibilityModal && (
        <CharacterModal
          characterWithEpisodes={characterWithEpisodes}
          closeModal={closeModal}
        />
      )}
      {visibilityModal && <Shadow closeModal={closeModal} />}
    </div>
  );
}
