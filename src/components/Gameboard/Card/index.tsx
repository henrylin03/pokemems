import type { Pokemon } from "../../../App";
import styles from "./Card.module.css";

interface Props {
  pokemon: Pokemon;
}

const Card = ({ pokemon }: Props) => {
  const { id, name, imageUrl } = pokemon;

  const handleClick = () => {
    // randomise the ids being fed into the useAllPokemons hook;
  };

  return (
    <button onClick={handleClick} className={styles.card} aria-label={name}>
      <figure className={styles.pokemonImageWrapper}>
        <img src={imageUrl} alt={name} className={styles.pokemonImage} />
      </figure>
      <p className={styles.pokemonName}>{name}</p>
    </button>
  );
};

export default Card;
