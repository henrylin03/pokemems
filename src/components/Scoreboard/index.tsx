import styles from "./Scoreboard.module.css";

const Scoreboard = () => (
  <section className={styles.section}>
    <ul className={styles.scores}>
      <li className={styles.scoreItem}>
        <p className={styles.label}>score:</p>
        <p className={styles.score}>0</p>
      </li>
      <li className={styles.scoreItem}>
        <p className={styles.label}>high score:</p>
        <p className={styles.score}>0</p>
      </li>
    </ul>
  </section>
);

export default Scoreboard;
