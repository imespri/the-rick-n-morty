import "./AvatarGroup.scss";
import { useState, useEffect } from "react";
import { fetchCharactersByIds } from "@/services";

export function AvatarGroup({ characters, count }) {
  const renderCharacters = () => {
    if (characters.length === 0) {
      return <span>-</span>;
    }

    const elemUI = characters.map((item, i) => (
      <li className="avatar-group__item" key={`${item.name}-${i}`}>
        <img
          className="avatar-group__image"
          src={item.image}
          alt={item.name}
          title={item.name}
        />
      </li>
    ));

    if (characters.length >= 6) {
      const lastElemUI = (
        <li
          key={`item-${characters.length - count}`}
          className="avatar-group__item"
        >
          <span className="avatar-group__count">{`${count - 6}+`}</span>
        </li>
      );

      elemUI.push(lastElemUI);
    }

    return elemUI;
  };

  return <ul className="avatar-group__list">{renderCharacters()}</ul>;
}
