import styles from "./Scoreboard.module.css";

const Scoreboard = () => (
  <section>
    <ul className={styles.scores}>
      <li className={styles.scoreItem}>score: 0</li>
      <li className={styles.scoreItem}>high score: 0</li>
    </ul>
  </section>
);

export default Scoreboard;
