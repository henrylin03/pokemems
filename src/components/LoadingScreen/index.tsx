import masterballImg from "./masterball.png";
import styles from "./LoadingScreen.module.css";

interface Props {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: Props) => {
  if (!isLoading) return <></>;
  return (
    <div className={styles.loadingScreen}>
      <article className={styles.card}>
        <img src={masterballImg} alt="Master ball" className={styles.img} />
        <p className={styles.text}>Catching them all...</p>
      </article>
    </div>
  );
};

export default LoadingScreen;
