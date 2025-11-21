import type { Pokemon } from "../../../App";
import styles from "./Card.module.css";

const Card = ({ id, name, imageUrl }: Pokemon) => {
  const handleClick = () => {
    alert(`you've clicked pokemon with id: ${String(id)}`);
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
