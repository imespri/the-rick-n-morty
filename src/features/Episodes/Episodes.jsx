import "./Episodes.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DataTable } from "@/components/DataTable/DataTable";
import { Pagination } from "@/components/Pagination/Pagination";
import { Spinner } from "@/components/Spinner/Spinner";
import { NotFound } from "@/components/NotFound/NotFound";
import { fetchEpisodes, fetchCharactersByIds } from "@/services";
import { getCharacterIds } from "@/utils/getCharacterIds";

export function Episodes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState(null);
  const [pageNumber, setPageNumber] = useState(
    parseInt(searchParams.get("page")) || 1,
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEpisodes = async () => {
      setLoading(true);
      setError(null);

      if (pageNumber < 1) {
        setError("Error");
        console.error("404 (Not Found)");
        return;
      }

      try {
        const data = await fetchEpisodes();
        setEpisodes(Array.isArray(data.results) ? data.results : []);

        const charactersIds = getCharacterIds(data.results, "characters");
        const charactersData = await fetchCharactersByIds(charactersIds);

        setCharacters(charactersData);
        setPageInfo(data.info);
      } catch (error) {
        setError(error);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, [pageNumber]);

  const setPage = (newPage) => {
    setSearchParams({ page: newPage });
    setPageNumber(newPage);
  };

  if (error) {
    return <NotFound />;
  }

  return (
    <div className="episodes">
      <div className="episodes__wrapper wrapper">
        <h2 className="episodes__header">Episodes</h2>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <DataTable
              page="episodes"
              data={episodes}
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
