import "./DataTable.scss";
import { AvatarGroup } from "./AvatarGroup/AvatarGroup";

export function DataTable({ page, data }) {
  // page === locations || episodes

  const createBodyUI = () => {
    return data.map((item) => (
      <tr key={`${page}-${item.name}`}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{page === "locations" ? item.type : item.air_date}</td>
        <td>{page === "locations" ? item.dimension : item.episode}</td>
        <td>
          <AvatarGroup
            charactersUrl={
              page === "locations" ? item.residents : item.characters
            }
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table-data">
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
  );
}
