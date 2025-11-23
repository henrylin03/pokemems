import type { Pokemon } from "../../../App";
import styles from "./Card.module.css";

interface Props {
  pokemon: Pokemon;
  onMouseDown: (pokemonId: number) => void;
}

const Card = ({ pokemon, onMouseDown }: Props) => {
  const { id, name, imageUrl } = pokemon;

  return (
    <button
      onMouseDown={() => {
        onMouseDown(id);
      }}
      className={styles.card}
      aria-label={name}
    >
      <figure className={styles.pokemonImageWrapper}>
        <img src={imageUrl} alt={name} className={styles.pokemonImage} />
      </figure>
      <p className={styles.pokemonName}>{name}</p>
    </button>
  );
};

export default Card;
