import masterballImg from "./masterball.png";
import styles from "./LoadingScreen.module.css";

interface Props {
  isVisible: boolean;
}

const LoadingScreen = ({ isVisible }: Props) => {
  if (!isVisible) return <></>;
  return (
    <div className={styles.backdrop}>
      <article className={styles.card}>
        <img src={masterballImg} alt="Master ball" className={styles.img} />
        <p className={styles.text}>Catching them all</p>
      </article>
    </div>
  );
};

export default LoadingScreen;
