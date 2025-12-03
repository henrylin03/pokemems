import Button from "../ui/Button";
import styles from "./ErrorModal.module.css";

interface Props {
  error: string;
}

const ErrorModal = ({ error }: Props) => (
  <div className={styles.backdrop}>
    <article className={styles.modal}>
      {/* <img src={img} className={styles.img} alt="Sad Psyduck" loading="lazy" /> */}
      <h1 className={styles.heading}>Uh oh!</h1>
      <p className={styles.copy}>
        There's been an issue retrieving the Pokémons.
        <br /> Please check your internet connection and try again.
      </p>
      <ul className={styles.buttons}>
        <li>
          <Button onClick={() => {}} className={styles.button}>
            Try again
          </Button>
        </li>
        <li>
          <Button onClick={() => {}} className={styles.button}>
            Report issue
          </Button>
        </li>
      </ul>
    </article>
  </div>
);

export default ErrorModal;
