import "./Locations.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { fetchLocations, fetchCharactersByIds } from "@/services";

const F = (data) => {
  // получение массива ID
  const arr = data.map((item) => {
    const ids = item.residents.map((a) => {
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

export function Locations() {
  const [locations, setLocations] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);

      try {
        const data = await fetchLocations();
        setLocations(Array.isArray(data.results) ? data.results : []);

        const charactersIds = F(data.results);
        const charactersData = await fetchCharactersByIds(charactersIds);
        setCharacters(charactersData);
      } catch (error) {
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, []);

  return (
    <div className="locations">
      <div className="locations__wrapper wrapper">
        <h2 className="locations__header">Locations</h2>
        {loading ? (
          <p>loading....</p>
        ) : (
          <DataTable
            page={"locations"}
            data={locations}
            allCharacters={characters}
          />
        )}
      </div>
    </div>
  );
}
