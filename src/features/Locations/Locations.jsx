import "./Locations.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable/DataTable";
import { Spinner } from "@/components/Spinner/Spinner";
import { Pagination } from "@/components/Pagination/Pagination";
import { NotFound } from "@/components/NotFound/NotFound";
import { fetchLocations, fetchCharactersByIds } from "@/services";
import { getCharacterIds } from "@/utils/getCharacterIds";

export function Locations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [locations, setLocations] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState(null);
  const [pageNumber, setPageNumber] = useState(
    parseInt(searchParams.get("page")) || 1,
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);
      setError(null);

      if (pageNumber < 1) {
        setError("Error");
        console.error("404 (Not Found)");
        return;
      }

      try {
        const data = await fetchLocations(pageNumber);
        setLocations(Array.isArray(data.results) ? data.results : []);

        const charactersIds = getCharacterIds(data.results, "residents");
        const charactersData = await fetchCharactersByIds(charactersIds);

        setCharacters(charactersData);
        setPageInfo(data.info);
      } catch (error) {
        setError(error);
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, [pageNumber]);

  const setPage = (newPage) => {
    setSearchParams({ page: newPage });
    setPageNumber(newPage);
  };

  if (error) {
    return <NotFound />;
  }

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
                setPage={setPage}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
