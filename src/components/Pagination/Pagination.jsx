import "./Pagination.scss";
import classNames from "classnames";

export function Pagination({ pageInfo, pageNumber, setPage }) {
  const handlePage = (num) => setPage(num);

  const createNumButtons = () => {
    let labels = [];
    const { pages } = pageInfo;

    if (pageNumber === 1) {
      labels = [1, 2, 3];
    } else if (pageNumber === pages) {
      labels = [pages - 2, pages - 1, pages];
    } else {
      labels = [pageNumber - 1, pageNumber, pageNumber + 1];
    }

    return labels.map((item) => (
      <button
        className={classNames("pagination__button", {
          "pagination__button--active": item === pageNumber,
        })}
        key={`pagination-${item}`}
        onClick={() => handlePage(item)}
      >
        {item}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => handlePage(pageNumber - 1)}
        disabled={!pageInfo.prev}
      >
        Prev
      </button>
      <div className="pagination__numbers">{createNumButtons()}</div>
      <button
        className="pagination__button"
        onClick={() => handlePage(pageNumber + 1)}
        disabled={!pageInfo.next}
      >
        Next
      </button>
    </div>
  );
}
