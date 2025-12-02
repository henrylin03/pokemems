import PlayAgainButton from "../PlayAgainButton";
import img from "./sad-psyduck-img.png";
import styles from "./GameOverModal.module.css";

interface Props {
  handleClickOnPlayAgainButton: () => void;
}

const GameOverModal = ({ handleClickOnPlayAgainButton }: Props) => (
  <div className={styles.backdrop}>
    <article className={styles.modal}>
      <h1 className={styles.heading}>game over</h1>
      <img src={img} className={styles.img} alt="Sad Psyduck" loading="lazy" />
      <p className={styles.copy}>
        You selected a Pokémon that you've already selected before
      </p>
      <PlayAgainButton onClick={handleClickOnPlayAgainButton} />
    </article>
  </div>
);

export default GameOverModal;
