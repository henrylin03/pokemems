import Card from "./Card";
import { getRandomPokemonIds } from "../../helpers";
import type { Pokemon } from "../../App";
import styles from "./Gameboard.module.css";

interface Props {
  totalPokemonsDisplayed: number;
  maxPokemonId: number;
  pokemons: Pokemon[];
  pokemonIdsSelectedThisRound: Set<number>;
  updateScores: () => void;
  setDisplayedPokemonsIds: (pokemonIds: number[]) => void;
  setPokemonIdsSelectedThisRound: (
    pokemonIds: Set<number> | ((prev: Set<number>) => Set<number>),
  ) => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const Gameboard = ({
  totalPokemonsDisplayed,
  maxPokemonId,
  pokemons,
  pokemonIdsSelectedThisRound,
  updateScores,
  setDisplayedPokemonsIds,
  setPokemonIdsSelectedThisRound,
  setIsGameOver,
}: Props) => {
  const handleMousedownOnCard = (pokemonId: number) => {
    if (pokemonIdsSelectedThisRound.has(pokemonId)) {
      setIsGameOver(true);
      return;
    }

    updateScores();
    setPokemonIdsSelectedThisRound(() =>
      new Set(pokemonIdsSelectedThisRound).add(pokemonId),
    );

    const newDisplayedPokemonsIds = getRandomPokemonIds(
      totalPokemonsDisplayed,
      maxPokemonId,
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
