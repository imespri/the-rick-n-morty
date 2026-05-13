const API = "https://rickandmortyapi.com/api";

export const fetchCharactersByQuery = async (query) => {
  try {
    const str = query === "" ? "" : `?name=${query}`;
    const response = await fetch(`${API}/character/${str}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};

export const fetchEpisodesById = async (id) => {
  try {
    const response = await fetch(`${API}/episode/${id}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
