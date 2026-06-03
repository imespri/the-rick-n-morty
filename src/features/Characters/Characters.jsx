import "./Characters.scss";
import { useState, useEffect } from "react";
import { useShadow } from "@/components/AppLayout/AppLayout";
import { useSearchParams } from "react-router-dom";
import { CharactersSearch } from "./CharactersSearch/CharactersSearch";
import { CharactersGrid } from "./CharactersGrid/CharactersGrid";
import { CharacterModal } from "./CharacterModal/CharacterModal";
import { Spinner } from "@/components/Spinner/Spinner";
import { Pagination } from "@/components/Pagination/Pagination";
import { NotFound } from "@/components/NotFound/NotFound";
import { fetchCharactersByQuery, fetchEpisodesById } from "@/services";

const extractIdFromUrl = (item) => item.split("/").pop();

export function Characters() {
  const { isShadowActive, openShadow, hideShadow } = useShadow();
  const [searchParams, setSearchParams] = useSearchParams();

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState(searchParams.get("name") || "");
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);
  const [characterWithEpisodes, setCharacterWithEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);

  const [pageInfo, setPageInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(
    parseInt(searchParams.get("page")) || 1,
  );
  const [error, setError] = useState(null);

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
    setPage(pageNumber);

    const loadCharacters = async () => {
      setLoading(true);
      setError(null);

      if (pageNumber < 1) {
        setError("Error");
        console.error("404 (Not Found)");
        return;
      }

      try {
        const data = await fetchCharactersByQuery(query, pageNumber);

        setCharacters(Array.isArray(data.results) ? data.results : []);
        setPageInfo(data.info);
      } catch (error) {
        setError(error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [query, pageNumber]);

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

  const setPage = (newPage) => {
    setPageNumber(newPage);
    setSearchParams({
      page: newPage,
      name: query,
    });
  };

  return (
    <div className="characters">
      <div className="characters__promo">
        <h1 className="characters__header">The Rick and Morty</h1>
        <CharactersSearch handleSearch={handleSearch} />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CharactersGrid
            characters={characters}
            handleCharacterCardClick={handleCharacterCardClick}
          />
          {pageInfo && pageInfo.count > 20 && (
            <Pagination
              pageInfo={pageInfo}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              setPage={setPage}
            />
          )}
        </>
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
