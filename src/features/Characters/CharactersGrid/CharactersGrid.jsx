import "./CharactersGrid.scss";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export function CharactersGrid({ characters, getCharacterId, openModal }) {
  const cardsUI = characters.map((item) => (
    <CharacterCard
      key={item.id}
      character={item}
      getCharacterId={getCharacterId}
      openModal={openModal}
    />
  ));

  return <section className="characters__grid wrapper">{cardsUI}</section>;
}
