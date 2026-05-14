import "./CharactersGrid.scss";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export function CharactersGrid({ characters, handleCharacterCardClick }) {
  const cardsUI = characters.map((item) => (
    <CharacterCard
      key={item.id}
      character={item}
      handleCharacterCardClick={handleCharacterCardClick}
    />
  ));

  const noResultsUL = characters.length === 0 && (
    <h3 className="characters__not-found">No results...</h3>
  );

  return (
    <>
      {noResultsUL}
      <section className="characters__grid wrapper">{cardsUI}</section>;
    </>
  );
}
