import "./CharactersList.scss";
import { useState, useEffect } from "react";
import { fetchCharactersByIds } from "@/services";

export function CharactersList({ charactersUrl }) {
  const count = 6;

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ids = Array.isArray(charactersUrl)
      ? charactersUrl.map((item) => {
          const parts = item.split("/");
          return Number(parts[parts.length - 1]);
        })
      : [];

    const getCharacters = async () => {
      setLoading(true);
      try {
        if (ids.length === 0) {
          setCharacters([]);
          return;
        }

        let data;
        if (ids.length <= count) {
          data = await fetchCharactersByIds(ids);
        } else {
          const idsPart = ids.slice(0, count);
          data = await fetchCharactersByIds(idsPart);
        }

        setCharacters(Array.isArray(data) ? data : []);
      } catch (error) {
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [charactersUrl]);

  const renderCharacters = () => {
    if (characters.length === 0) {
      return <span>-</span>;
    }

    const elemUI = characters.map((item, i) => (
      <li className="characters-list__item" key={`${item.name}-${i}`}>
        <img
          className="characters-list__image"
          src={item.image}
          alt={item.name}
          title={item.name}
        />
      </li>
    ));

    if (charactersUrl.length >= count) {
      const lastElemUI = (
        <li
          key={`item-${charactersUrl.length - count}`}
          className="characters-list__item characters-list__item--count"
        >
          <span className="characters-list__count">
            {`${charactersUrl.length - count}+`}
          </span>
        </li>
      );

      elemUI.push(lastElemUI);
    }

    return elemUI;
  };

  return (
    <div>
      {loading ? (
        <span>loading...</span>
      ) : (
        <ul className="characters-list__list">{renderCharacters()}</ul>
      )}
    </div>
  );
}
