import "./CharactersGrid.scss";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export function CharactersGrid({ characters, handleCardClick }) {
  const cardsUI = characters.map((item) => (
    <CharacterCard
      key={item.id}
      character={item}
      handleCardClick={handleCardClick}
    />
  ));

  return <section className="characters__grid wrapper">{cardsUI}</section>;
}
