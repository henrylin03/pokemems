import styles from "./NewHighScoreModal.module.css";

interface Props {
  newHighScore: number;
}

const NewHighScoreModal = ({ newHighScore }: Props) => {
  return (
    <div className={styles.backdrop}>
      <article className={styles.modal}>
        <h1 className={styles.heading}>New high score</h1>
        {/* <img
          src={img}
          className={styles.img}
          alt="Sad Psyduck"
          loading="lazy"
        /> */}
        <div className={styles.textContainer}>
          <p className={styles.copy}>
            Congratulations! You've set a new high score of
          </p>
          <p className={styles.highScore}>3</p>
        </div>
        <button type="button" className={styles.button}>
          Play again
        </button>
      </article>
    </div>
  );
};

export default NewHighScoreModal;
