import Card from "./Card";
import type { Pokemon } from "../../App";
import {
  ID_OF_LAST_POKEMON_IN_GENERATION_1,
  TOTAL_POKEMONS_DISPLAYED,
} from "../../constants";
import { getRandomPokemonIds } from "../../helpers";
import styles from "./Gameboard.module.css";

interface Props {
  pokemons: Pokemon[];
  setDisplayedPokemonsIds: (pokemonIds: number[]) => void;
  pokemonIdsSelectedThisRound: Set<number>;
  setPokemonIdsSelectedThisRound: (
    pokemonIds: Set<number> | ((prev: Set<number>) => Set<number>),
  ) => void;
  updateScores: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const Gameboard = ({
  pokemons,
  setDisplayedPokemonsIds,
  pokemonIdsSelectedThisRound,
  updateScores,
  setPokemonIdsSelectedThisRound,
  setIsGameOver,
}: Props) => {
  const selectPokemon = (pokemonId: number) => {
    if (pokemonIdsSelectedThisRound.has(pokemonId)) {
      setIsGameOver(true);
      return;
    }

    updateScores();
    setPokemonIdsSelectedThisRound(() =>
      new Set(pokemonIdsSelectedThisRound).add(pokemonId),
    );

    const newDisplayedPokemonsIds = getRandomPokemonIds(
      TOTAL_POKEMONS_DISPLAYED,
      ID_OF_LAST_POKEMON_IN_GENERATION_1,
    );

    setDisplayedPokemonsIds(newDisplayedPokemonsIds);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    pokemonId: number,
  ) => {
    if (!(event.key === "Enter")) return;
    selectPokemon(pokemonId);
  };

  return (
    <section className={styles.section}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          onMouseDown={() => {
            selectPokemon(pokemon.id);
          }}
          onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
            handleKeyDown(event, pokemon.id);
          }}
        />
      ))}
    </section>
  );
};

export default Gameboard;
