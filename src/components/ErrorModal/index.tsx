import Button from "../ui/Button";
import Modal from "../ui/Modal";
import img from "./confused-psyduck.png";
import styles from "./ErrorModal.module.css";

interface Props {
  errorMessage: string;
  retryFetch: () => Promise<void>;
}

const LINK_TO_NEW_GITHUB_ISSUE =
  "https://github.com/henrylin03/pokemems/issues/new?template=report-a-bug.md";

const ErrorModal = ({ errorMessage, retryFetch }: Props) => {
  console.error("Error:", errorMessage);
  return (
    <Modal shouldShow={Boolean(errorMessage)} className={styles.modal}>
      <img
        src={img}
        alt="Confused Psyduck"
        loading="lazy"
        className={styles.img}
      />
      <div>
        <h1 className={styles.heading}>Uh oh!</h1>
        <p className={styles.copy}>
          There's been an issue retrieving the Pokémons.
          <br /> Please check your internet connection and try again.
        </p>
      </div>
      <ul className={styles.buttons}>
        <li>
          {/* TODO: fix type error here */}
          <Button onClick={retryFetch} className={styles.button}>
            Try again
          </Button>
        </li>
        <li>
          <a
            href={LINK_TO_NEW_GITHUB_ISSUE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Report issue on GitHub"
            className={styles.button}
          >
            <Button>Report issue</Button>
          </a>
        </li>
      </ul>
    </Modal>
  );
};

export default ErrorModal;
