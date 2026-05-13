import "./CharacterCard.scss";

export function CharacterCard({ character, getCharacterId, openModal }) {
  const open = () => {
    getCharacterId(character.id);
    openModal();
  };

  return (
    <article className="character-card" onClick={open}>
      <div>
        <img
          className="character-card__image"
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className="character-card__column">
        <h2 className="character-card__header">{character.name}</h2>
        <ul className="character-card__tag-list">
          <li className="character-card__tag">{character.gender}</li>
          <li className="character-card__tag">{character.status}</li>
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
