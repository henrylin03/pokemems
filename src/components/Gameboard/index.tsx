import { useState } from "react";
import { useAllPokemons } from "../../hooks/useAllPokemons";
import Card from "./Card";
import styles from "./Gameboard.module.css";

const getRandomPokemonIds = (
  totalIds: number,
  maxPokemonId: number,
): number[] => {
  const getRandomId = (maxId: number): number =>
    Math.floor(Math.random() * maxId + 1);

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

const Gameboard = () => {
  const TOTAL_POKEMON_IDS = 10;
  const MAX_POKEMON_ID = 150; // generation 1
  const [pokemonIds, setPokemonIds] = useState<number[]>(() =>
    getRandomPokemonIds(TOTAL_POKEMON_IDS, MAX_POKEMON_ID),
  );

  const { pokemons, error, isLoading } = useAllPokemons(pokemonIds);

  const handleMousedownOnCard = (pokemonId: number) => {
    const newPokemonIds = getRandomPokemonIds(
      TOTAL_POKEMON_IDS,
      MAX_POKEMON_ID,
    );
    setPokemonIds(newPokemonIds);
  };

  return (
    <section className={styles.section}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          onMouseDown={() => {
            handleMousedownOnCard(pokemon.id);
          }}
        />
      ))}
    </section>
  );
};

export default Gameboard;
