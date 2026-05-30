import "./Episodes.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { fetchEpisodes, fetchCharactersByIds } from "@/services";

const F = (data) => {
  // получение массива ID
  const arr = data.map((item) => {
    const ids = item.characters.map((a) => {
      const result = a.split("/");
      return Number(result[result.length - 1]);
    });

    return ids;
  });

  // удаление повторяющихся значений
  const arrUniqueIds = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arrUniqueIds.includes(arr[i]) && arr[i].length !== 0) {
      arrUniqueIds.push(arr[i]);
    }
  }

  return arrUniqueIds;
};

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

        const charactersIds = F(data.results);
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
          <p>loading....</p>
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
