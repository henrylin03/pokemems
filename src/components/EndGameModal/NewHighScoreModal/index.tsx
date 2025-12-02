import PlayAgainButton from "../PlayAgainButton";
import img from "./ribbon-img.png";
import styles from "./NewHighScoreModal.module.css";

interface Props {
  newHighScore: number;
  handleClickOnPlayAgainButton: () => void;
}

const NewHighScoreModal = ({
  newHighScore,
  handleClickOnPlayAgainButton,
}: Props) => {
  return (
    <div className={styles.backdrop}>
      <article className={styles.modal}>
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
          <p className={styles.highScore}>{newHighScore}</p>
        </div>
        <PlayAgainButton onClick={handleClickOnPlayAgainButton} />
      </article>
    </div>
  );
};

export default NewHighScoreModal;
