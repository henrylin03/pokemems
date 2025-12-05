import Modal from "../ui/Modal";
import PlayAgainButton from "../PlayAgainButton";
import img from "./sad-psyduck-img.png";
import styles from "./GameOverModal.module.css";

interface Props {
  shouldShow: boolean;
  resetGame: () => void;
}

const GameOverModal = ({ shouldShow, resetGame }: Props) => (
  <Modal shouldShow={shouldShow} className={styles.modal}>
    <div className={styles.inner}>
      <h1 className={styles.heading}>game over</h1>
      <img src={img} className={styles.img} alt="Sad Psyduck" loading="lazy" />
      <p className={styles.copy}>
        You selected a Pokémon that you've already selected before
      </p>
      <PlayAgainButton onClick={resetGame} />
    </div>
  </Modal>
);

export default GameOverModal;
