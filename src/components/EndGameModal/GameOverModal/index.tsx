import img from "./sad-psyduck-img.png";
import styles from "./GameOverModal.module.css";

interface Props {
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const GameOverModal = ({ resetGame, setIsGameOver }: Props) => {
  const handleClickOnButton = () => {
    setIsGameOver(false);
    resetGame();
  };

  return (
    <div className={styles.backdrop}>
      <article className={styles.modal}>
        <h1 className={styles.heading}>game over</h1>
        <img
          src={img}
          className={styles.img}
          alt="Sad Psyduck"
          loading="lazy"
        />
        <p className={styles.copy}>
          You selected a Pokémon that you've already selected before
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickOnButton}
        >
          Play again
        </button>
      </article>
    </div>
  );
};

export default GameOverModal;
