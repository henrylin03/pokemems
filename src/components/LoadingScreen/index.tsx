import Modal from "../ui/Modal";
import masterballImg from "./masterball.png";
import styles from "./LoadingScreen.module.css";

interface Props {
  shouldShow: boolean;
}

const LoadingScreen = ({ shouldShow }: Props) => (
  <Modal shouldShow={shouldShow} className={styles.card}>
    <img src={masterballImg} alt="Master ball" className={styles.img} />
    <p className={styles.text}>Catching them all</p>
  </Modal>
);

export default LoadingScreen;
