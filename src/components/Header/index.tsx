import Scoreboard from "../Scoreboard";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <section className={styles.left}>
      <h1 className={styles.heading}>Pokémems</h1>
      <p className={styles.subtext}>
        Earn points by clicking on a Pokémon... but not more than once!
      </p>
    </section>

    <Scoreboard />
  </header>
);

export default Header;
