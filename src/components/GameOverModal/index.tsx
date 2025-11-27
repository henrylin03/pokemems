import styles from "./GameOverModal.module.css";

interface Props {
  isVisible: boolean;
}

const GameOverModal = ({ isVisible }: Props) => {
  if (!isVisible) return <></>;
  return <div className={styles.backdrop}></div>;
};

export default GameOverModal;
