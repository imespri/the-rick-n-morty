import "./Episodes.scss";
import { useState, useEffect } from "react";
import { CharactersList } from "../Locations/CharactersList/CharactersList";
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

  const createTableBodyUI = () => {
    return episodes.map((item) => (
      <tr key={`episodes-${item.name}`}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.air_date}</td>
        <td>{item.episode}</td>
        <td>
          <CharactersList charactersUrl={item.characters} />
        </td>
      </tr>
    ));
  };

  return (
    <div className="episodes">
      <div className="episodes__wrapper wrapper">
        <h2 className="episodes__header">Episodes</h2>
        {loading ? (
          <p>loading....</p>
        ) : (
          <div className="episodes__container">
            <table className="episodes__table">
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Name</th>
                  <th>Air Date</th>
                  <th>Episode</th>
                  <th>Characters</th>
                </tr>
              </thead>
              <tbody>{createTableBodyUI()}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
