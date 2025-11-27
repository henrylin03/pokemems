import styles from "./GameOverModal.module.css";

interface Props {
  isVisible: boolean;
}

const GameOverModal = ({ isVisible }: Props) => {
  if (!isVisible) return <></>;

  return (
    <div className={styles.backdrop}>
      <article className={styles.modal}>
        <h1 className={styles.heading}>game over</h1>
        <img className={styles.img} alt="Sad shroomish" />
        <p className={styles.copy}>
          You selected a Pokémon that you've already selected before
        </p>
        <button type="button" className={styles.button}>
          Play again
        </button>
      </article>
    </div>
  );
};

export default GameOverModal;
