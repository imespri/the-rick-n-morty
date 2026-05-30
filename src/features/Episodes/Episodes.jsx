import "./Episodes.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { fetchEpisodes } from "@/services";

export function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadEpisodes = async () => {
      setLoading(true);

      try {
        const data = await fetchEpisodes();
        setEpisodes(Array.isArray(data.results) ? data.results : []);
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
          <div className="episodes__container">
            <DataTable page="episodes" data={episodes} />
          </div>
        )}
      </div>
    </div>
  );
}
