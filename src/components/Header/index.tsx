import Scoreboard from "./Scoreboard";
import styles from "./Header.module.css";

interface Props {
  currentScore: number;
  highScore: number;
}

const Header = ({ currentScore, highScore }: Props) => (
  <header className={styles.header}>
    <section className={styles.left}>
      <h1 className={styles.heading}>Pokémems</h1>
      <p className={styles.subtext}>
        Earn points by clicking on a Pokémon... but not more than once!
      </p>
    </section>

    <Scoreboard currentScore={currentScore} highScore={highScore} />
  </header>
);

export default Header;
