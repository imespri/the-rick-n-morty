import "./Locations.scss";
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { fetchLocations } from "@/services";

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

  return (
    <div className="locations">
      <div className="locations__wrapper wrapper">
        <h2 className="locations__header">Locations</h2>
        {loading ? (
          <p>loading....</p>
        ) : (
          <div className="locations__container">
            <DataTable page={"locations"} data={locations} />
          </div>
        )}
      </div>
    </div>
  );
}
