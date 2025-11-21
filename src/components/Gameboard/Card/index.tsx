import type { Pokemon } from "../../../App";
import styles from "./Card.module.css";

const Card = ({ id, name, imageUrl }: Pokemon) => {
  const handleClick = () => {
    alert(`you've clicked pokemon with id: ${String(id)}`);
  };

  return (
    <button aria-label={name} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Card;
