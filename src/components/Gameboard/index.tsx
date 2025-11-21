import { useAllPokemons } from "../../hooks/useAllPokemons";
import Card from "./Card";
import styles from "./Gameboard.module.css";

const Gameboard = () => {
  const POKEMON_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 69];
  const { pokemons, error, isLoading } = useAllPokemons(POKEMON_IDS);
  console.log("pokemons:", pokemons);

  return (
    <section className={styles.section}>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </section>
  );
};

export default Gameboard;
