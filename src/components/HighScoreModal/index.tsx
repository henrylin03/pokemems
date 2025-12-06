import Modal from "../ui/Modal";
import Button from "../ui/Button";
import img from "./ribbon-img.png";
import styles from "./HighScoreModal.module.css";

interface Props {
  shouldShow: boolean;
  highScore: number;
  resetGame: () => void;
}

const HighScoreModal = ({ shouldShow, highScore, resetGame }: Props) => (
  <Modal shouldShow={shouldShow} className={styles.modal}>
    <div className={styles.inner}>
      <h1 className={styles.heading}>New high score</h1>
      <img
        src={img}
        className={styles.img}
        alt="High score ribbon"
        loading="lazy"
      />
      <div className={styles.textContainer}>
        <p className={styles.copy}>
          Congratulations! You've set a new high score of
        </p>
        <p className={styles.highScore}>{highScore}</p>
      </div>
      <Button onClick={resetGame}>Play again</Button>
    </div>
  </Modal>
);

export default HighScoreModal;
