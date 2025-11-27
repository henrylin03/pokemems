import Card from "./Card";
import { getRandomPokemonIds } from "./helpers";
import type { Pokemon } from "../../App";
import styles from "./Gameboard.module.css";

interface Props {
  pokemons: Pokemon[];
  pokemonIdsSelectedThisRound: Set<number>;
  updateScores: () => void;
  resetCurrentRoundScore: () => void;
  setDisplayedPokemonsIds: (pokemonIds: number[]) => void;
  setPokemonIdsSelectedThisRound: (
    pokemonIds: Set<number> | ((prev: Set<number>) => Set<number>),
  ) => void;
}

const Gameboard = ({
  pokemons,
  pokemonIdsSelectedThisRound,
  updateScores,
  resetCurrentRoundScore,
  setDisplayedPokemonsIds,
  setPokemonIdsSelectedThisRound,
}: Props) => {
  const TOTAL_POKEMON_IDS = 10;
  const MAX_POKEMON_ID = 150; // generation 1

  const resetGame = () => {
    setPokemonIdsSelectedThisRound(new Set<number>());
    resetCurrentRoundScore();
    setDisplayedPokemonsIds(
      getRandomPokemonIds(TOTAL_POKEMON_IDS, MAX_POKEMON_ID),
    );
  };

  const handleMousedownOnCard = (pokemonId: number) => {
    if (pokemonIdsSelectedThisRound.has(pokemonId)) {
      alert("Pokemon has been selected before. You lose.");
      resetGame();
      return;
    }

    updateScores();
    setPokemonIdsSelectedThisRound(() =>
      new Set(pokemonIdsSelectedThisRound).add(pokemonId),
    );

    const newDisplayedPokemonsIds = getRandomPokemonIds(
      TOTAL_POKEMON_IDS,
      MAX_POKEMON_ID,
    );
    setDisplayedPokemonsIds(newDisplayedPokemonsIds);
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
