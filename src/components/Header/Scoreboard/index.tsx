import styles from "./Scoreboard.module.css";

interface Props {
  currentScore: number;
  highScore: number;
}

const Scoreboard = ({ currentScore, highScore }: Props) => (
  <section className={styles.section}>
    <ul className={styles.scores}>
      <li className={styles.scoreItem}>
        <p className={styles.label}>score:</p>
        <p className={styles.score}>{currentScore}</p>
      </li>
      <li className={styles.scoreItem}>
        <p className={styles.label}>high score:</p>
        <p className={styles.score}>{highScore}</p>
      </li>
    </ul>
  </section>
);

export default Scoreboard;
