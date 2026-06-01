import "./Locations.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { Spinner } from "@/components/Spinner/Spinner";
import { Pagination } from "@/components/Pagination/Pagination";
import { fetchLocations, fetchCharactersByIds } from "@/services";
import { getCharacterIds } from "@/utils/getCharacterIds";

export function Locations() {
  const [locations, setLocations] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);

      try {
        const data = await fetchLocations(pageNumber);
        setLocations(Array.isArray(data.results) ? data.results : []);

        const charactersIds = getCharacterIds(data.results, "residents");
        const charactersData = await fetchCharactersByIds(charactersIds);

        setCharacters(charactersData);
        setPageInfo(data.info);
      } catch (error) {
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, [pageNumber]);

  return (
    <div className="locations">
      <div className="locations__wrapper wrapper">
        <h2 className="locations__header">Locations</h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <DataTable
              page={"locations"}
              data={locations}
              allCharacters={characters}
            />
            {pageInfo && (
              <Pagination
                pageInfo={pageInfo}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
