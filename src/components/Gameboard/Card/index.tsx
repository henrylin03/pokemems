import type { Pokemon } from "../../../App";
import styles from "./Card.module.css";

interface Props {
  pokemon: Pokemon;
  onMouseDown: (pokemonId: number) => void;
  onKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    pokemonId: number,
  ) => void;
}

const Card = ({ pokemon, onMouseDown, onKeyDown }: Props) => {
  const { id, name, imageUrl } = pokemon;

  return (
    <button
      onMouseDown={() => {
        onMouseDown(id);
      }}
      onKeyDown={(e) => {
        onKeyDown(e, id);
      }}
      className={styles.card}
      aria-label={name}
    >
      <div className={styles.inner}>
        <figure className={styles.pokemonImageWrapper}>
          <img src={imageUrl} alt={name} className={styles.pokemonImage} />
        </figure>
        <p className={styles.pokemonName}>{name}</p>
      </div>
    </button>
  );
};

export default Card;
