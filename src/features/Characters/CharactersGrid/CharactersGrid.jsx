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

  return <section className="characters__grid wrapper">{cardsUI}</section>;
}
