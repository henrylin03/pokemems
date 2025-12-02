import styles from "./PlayAgainButton.module.css";

interface Props {
  onClick: () => void;
}

const PlayAgainButton = ({ onClick }: Props) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Play again
  </button>
);

export default PlayAgainButton;
