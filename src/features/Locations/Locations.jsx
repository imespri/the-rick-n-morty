import "./Locations.scss";
import { useState, useEffect } from "react";
import { fetchLocations } from "@/services";
import { CharactersList } from "./CharactersList/CharactersList";

export function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadLocations = async () => {
      setLoading(true);

      try {
        const data = await fetchLocations();
        setLocations(Array.isArray(data.results) ? data.results : []);
      } catch (error) {
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, []);

  const createTableBodyUI = () => {
    return locations.map((item) => (
      <tr key={`location-${item.id}`}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.dimension}</td>
        <td>
          <CharactersList charactersUrl={item.residents} />
        </td>
      </tr>
    ));
  };

  return (
    <div className="locations">
      <div className="locations__wrapper wrapper">
        <h2 className="locations__header">Locations</h2>
        {loading ? (
          <p>loading....</p>
        ) : (
          <div className="locations__container">
            <table className="locations__table">
              <thead>
                <tr>
                  <th>Num</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Dimension</th>
                  <th>Residents</th>
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
