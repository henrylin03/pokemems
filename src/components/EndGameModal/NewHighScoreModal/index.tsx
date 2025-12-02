import styles from "./NewHighScoreModal.module.css";

const NewHighScoreModal = () => {
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

export default NewHighScoreModal;
