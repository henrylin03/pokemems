import styles from "./GameOverModal.module.css";

interface Props {
  isVisible: boolean;
}

const GameOverModal = ({ isVisible }: Props) => {
  if (!isVisible) return <></>;
  return (
    <div className={styles.backdrop}>
      <dialog className={styles.modal}>
        {/* <img src={masterballImg} alt="Master ball" className={styles.img} /> */}
        <p className={styles.text}>Catching them all</p>
      </dialog>
    </div>
  );
};

export default GameOverModal;
