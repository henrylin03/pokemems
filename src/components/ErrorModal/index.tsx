import Button from "../ui/Button";
import img from "./confused-psyduck.png";
import styles from "./ErrorModal.module.css";

interface Props {
  error: string;
}

const ErrorModal = ({ error }: Props) => {
  console.error(error);

  return (
    <div className={styles.backdrop}>
      <article className={styles.modal}>
        <img
          src={img}
          className={styles.img}
          alt="Confused Psyduck"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className={styles.heading}>Uh oh!</h1>
          <p className={styles.copy}>
            There's been an issue retrieving the Pokémons.
            <br /> Please check your internet connection and try again.
          </p>
        </div>
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
};

export default ErrorModal;
