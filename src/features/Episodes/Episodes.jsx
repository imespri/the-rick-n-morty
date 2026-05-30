import "./Episodes.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { Spinner } from "@/components/Spinner/Spinner";
import { fetchEpisodes, fetchCharactersByIds } from "@/services";
import { getCharacterIds } from "@/utils/getCharacterIds";

export function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadEpisodes = async () => {
      setLoading(true);

      try {
        const data = await fetchEpisodes();
        setEpisodes(Array.isArray(data.results) ? data.results : []);

        const charactersIds = getCharacterIds(data.results, "characters");
        const charactersData = await fetchCharactersByIds(charactersIds);
        setCharacters(charactersData);
      } catch (error) {
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  return (
    <div className="episodes">
      <div className="episodes__wrapper wrapper">
        <h2 className="episodes__header">Episodes</h2>
        {loading ? (
          <Spinner />
        ) : (
          <DataTable
            page="episodes"
            data={episodes}
            allCharacters={characters}
          />
        )}
      </div>
    </div>
  );
}
