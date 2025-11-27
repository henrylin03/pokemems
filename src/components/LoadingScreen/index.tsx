import styles from "./LoadingScreen.module.css";

interface Props {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: Props) => {
  if (!isLoading) return <></>;
  return (
    <div className={styles.loadingScreen}>
      <article className={styles.card}>
        <p className={styles.text}>Catching them all...</p>
      </article>
    </div>
  );
};

export default LoadingScreen;
