const getRandomId = (maxId: number): number =>
  Math.floor(Math.random() * maxId + 1);

export const getRandomPokemonIds = (
  totalIds: number,
  maxPokemonId: number,
): number[] => {
  const ids = new Set<number>();

  let count = 0;
  while (count < totalIds) {
    let randomPokemonId: number = getRandomId(maxPokemonId);
    while (ids.has(randomPokemonId))
      randomPokemonId = getRandomId(maxPokemonId);
    ids.add(randomPokemonId);
    count++;
  }

  return [...ids];
};
