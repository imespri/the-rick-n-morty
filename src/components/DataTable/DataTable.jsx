import "./DataTable.scss";
import { AvatarGroup } from "./AvatarGroup/AvatarGroup";

export function DataTable({ page, data, allCharacters }) {
  // page === locations || episodes

  const getCharacters = (residents) => {
    const ids = residents.map((a) => {
      const r = a.split("/");
      return Number(r[r.length - 1]);
    });

    const result = [];

    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < allCharacters.length; j++) {
        if (ids[i] === allCharacters[j].id) {
          result.push(allCharacters[j]);
        }
      }
    }

    return result.slice(0, 6);
  };

  const createBodyUI = () => {
    return data.map((item) => (
      <tr key={`${page}-${item.name}`}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{page === "locations" ? item.type : item.air_date}</td>
        <td>{page === "locations" ? item.dimension : item.episode}</td>
        {page === "locations" ? (
          <td>
            <AvatarGroup
              characters={getCharacters(item.residents)}
              count={item.residents.length}
            />
          </td>
        ) : (
          <td>
            <AvatarGroup
              characters={getCharacters(item.characters)}
              count={item.characters.length}
            />
          </td>
        )}
      </tr>
    ));
  };

  return (
    <div className="table-data">
      <table className="table-data__table">
        <thead>
          <tr>
            <th>Num</th>
            <th>Name</th>
            <th>{page === "locations" ? "Type" : "Air Date"}</th>
            <th>{page === "locations" ? "Dimension" : "Episode"}</th>
            <th>{page === "locations" ? "Residents" : "Characters"}</th>
          </tr>
        </thead>
        <tbody>{createBodyUI()}</tbody>
      </table>
    </div>
  );
}
