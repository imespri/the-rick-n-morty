import "./Locations.scss";
import { useState, useEffect } from "react";
import { fetchLocations, fetchCharactersByIds } from "@/services";

const F = (characters) => {
  let result = null;

  const charactersIds = characters.map((item) => {
    const parts = item.split("/");
    return Number(parts[parts.length - 1]);
  });

  const getCharacters = async () => {
    const count = 5;

    switch (true) {
      case charactersIds.length === 0: {
        result = [];
      }
      case charactersIds.length <= count: {
        result = await fetchCharactersByIds(charactersIds);
      }
      case charactersIds.length >= count: {
        const charactersIdsPart = charactersIds.slice(0, count);
        const l = charactersIds.length - count;

        const data = await fetchCharactersByIds(charactersIdsPart);
        result = data;
      }
      default: {
        result = [];
      }
    }
  };
};

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
        <td>{F(item.residents)}</td>
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
