import { useState } from "react";
import { useAllPokemons } from "../../hooks/useAllPokemons";
import Card from "./Card";
import { getRandomPokemonIds } from "./helpers";
import styles from "./Gameboard.module.css";

type SelectedIds = Set<number>;

interface Props {
  updateScores: () => void;
  resetCurrentRoundScore: () => void;
}

const Gameboard = ({ updateScores, resetCurrentRoundScore }: Props) => {
  const TOTAL_POKEMON_IDS = 10;
  const MAX_POKEMON_ID = 150; // generation 1

  const [displayedPokemonsIds, setDisplayedPokemonsIds] = useState<number[]>(
    () => getRandomPokemonIds(TOTAL_POKEMON_IDS, MAX_POKEMON_ID),
  );
  const { pokemons } = useAllPokemons(displayedPokemonsIds);
  const [pokemonIdsSelectedThisRound, setPokemonIdsSelectedThisRound] =
    useState<SelectedIds>(() => new Set<number>());

  const resetGame = () => {
    setPokemonIdsSelectedThisRound(new Set<number>());
    resetCurrentRoundScore();
    setDisplayedPokemonsIds(
      getRandomPokemonIds(TOTAL_POKEMON_IDS, MAX_POKEMON_ID),
    );
  };

  const handleMousedownOnCard = (pokemonId: number) => {
    console.log("selected pokemon Ids:", pokemonIdsSelectedThisRound);

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
