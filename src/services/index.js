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

export const fetchCharactersByIds = async (ids) => {
  try {
    const response = await fetch(`${API}/character/${ids}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};

export const fetchEpisodes = async () => {
  try {
    const response = await fetch(`${API}/episode`);
    return response.json();
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

export const fetchLocations = async (page) => {
  try {
    const response = await fetch(`${API}/location/?page=${page}`);
    return await response.json();
  } catch ({ message }) {
    throw message;
  }
};
