export function getCharacterIds(data, key) {
  const uniqueIds = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const urls = item[key];

    if (!Array.isArray(urls)) continue;

    for (let j = 0; j < urls.length; j++) {
      const url = urls[j];

      const parts = url.split("/");
      const lastPart = parts[parts.length - 1];
      const id = Number(lastPart);

      if (isNaN(id)) continue;

      let exists = false;
      for (let k = 0; k < uniqueIds.length; k++) {
        if (uniqueIds[k] === id) {
          exists = true;
          break;
        }
      }

      if (!exists) {
        uniqueIds.push(id);
      }
    }
  }

  return uniqueIds;
}
