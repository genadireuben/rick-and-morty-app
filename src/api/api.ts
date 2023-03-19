export const getAllCharacters = async (queryParams: string) => {
  try {
    const reponse = await fetch(
      `https://rickandmortyapi.com/api/character/?${queryParams}`
    );
    const newCharacters = await reponse.json();
    return newCharacters;
  } catch (err) {
    console.error(err);
  }
};
