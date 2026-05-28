import "./Characters.scss";
import { useState, useEffect } from "react";
import { useShadow } from "@/components/AppLayout/AppLayout";
import { CharactersSearch } from "./CharactersSearch/CharactersSearch";
import { CharactersGrid } from "./CharactersGrid/CharactersGrid";
import { CharacterModal } from "./CharacterModal/CharacterModal";
import { Spinner } from "@/components/Spinner/Spinner";
import { fetchCharactersByQuery, fetchEpisodesById } from "@/services";

const extractIdFromUrl = (item) => item.split("/").pop();

export function Characters() {
  const { isShadowActive, openShadow, hideShadow } = useShadow();

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [characterWithEpisodes, setCharacterWithEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (value) => setQuery(value);

  const handleCharacterCardClick = (id) => setSelectedCharacterId(id);

  const openModal = () => {
    setIsModalOpen(true);
    openShadow();
    handleCharacterCardClick(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    handleCharacterCardClick(null);
    hideShadow();
  };

  useEffect(() => {
    if (!isShadowActive) {
      setIsModalOpen(false);
    }
  }, [isShadowActive]);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);

      try {
        const data = await fetchCharactersByQuery(query);
        setCharacters(Array.isArray(data.results) ? data.results : []);
      } catch (error) {
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [query]);

  useEffect(() => {
    if (!selectedCharacterId) return;

    const character = characters.find(
      (item) => item.id === selectedCharacterId,
    );

    const loadEpisodes = async () => {
      if (selectedCharacterId !== null) {
        const first = extractIdFromUrl(character.episode[0]);
        const last = extractIdFromUrl(
          character.episode[character.episode.length - 1],
        );
        const ids = `${first},${last}`;

        const episodes = await fetchEpisodesById(ids);

        setCharacterWithEpisodes({ character, episodes });
        openModal();
      }
    };

    loadEpisodes();
  }, [selectedCharacterId]);

  return (
    <div className="characters">
      <div className="characters__promo">
        <h1 className="characters__header">The Rick and Morty</h1>
        <CharactersSearch handleSearch={handleSearch} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <CharactersGrid
          characters={characters}
          handleCharacterCardClick={handleCharacterCardClick}
        />
      )}
      {isModalOpen && (
        <CharacterModal
          characterWithEpisodes={characterWithEpisodes}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
