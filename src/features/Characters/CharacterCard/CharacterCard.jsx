import "./CharacterCard.scss";
import classNames from "classnames";

export function CharacterCard({ character, handleCharacterCardClick }) {
  return (
    <article className="character-card">
      <div onClick={() => handleCharacterCardClick(character.id)}>
        <img
          className="character-card__image"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="character-card__column">
        <h2
          className="character-card__header"
          onClick={() => handleCharacterCardClick(character.id)}
        >
          {character.name}
        </h2>
        <ul className="character-card__tag-list">
          <li
            className={classNames(
              "character-card__tag",
              { "character-card__tag--female": character.gender === "Female" },
              { "character-card__tag--male": character.gender === "Male" },
              {
                "character-card__tag--genderless":
                  character.gender === "Genderless",
              },
            )}
          >
            {character.gender}
          </li>
          <li
            className={classNames(
              "character-card__tag",
              { "character-card__tag--alive": character.status === "Alive" },
              { "character-card__tag--dead": character.status === "Dead" },
            )}
          >
            {character.status}
          </li>
        </ul>
        <div className="character-card__description">
          <p className="character-card__property" key={`${character.name}-1}`}>
            <span className="character-card__title">Species:</span>
            <span>{character.species}</span>
          </p>
          <p className="character-card__property" key={`${character.name}-2}`}>
            <span className="character-card__title">Type:</span>
            <span>{character.type.length ? character.type : "-"}</span>
          </p>
          <p className="character-card__property" key={`${character.name}-3}`}>
            <span className="character-card__title">Location:</span>
            <span>{character.location.name}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
