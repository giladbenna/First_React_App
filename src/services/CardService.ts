// services/CardService.ts
const fetchCards = async () => {
  const response = await fetch('/data/movies.json')
  if (!response.ok) {
    throw new Error("Failed to fetch cards");
  }
  return await response.json();
};

export default fetchCards;
