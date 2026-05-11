const API = "https://rickandmortyapi.com/api";

export const getCharactersByQuery = async (query) => {
  try {
    const str = query === "" ? "" : `?name=${query}`;
    const response = await fetch(`${API}/character/${str}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
