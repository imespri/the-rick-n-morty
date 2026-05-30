import "./Locations.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { Spinner } from "@/components/Spinner/Spinner";
import { fetchLocations, fetchCharactersByIds } from "@/services";
import { getCharacterIds } from "@/utils/getCharacterIds";

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

        const charactersIds = getCharacterIds(data.results, "residents");
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
          <Spinner />
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
