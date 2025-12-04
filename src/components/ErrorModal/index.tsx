import Button from "../ui/Button";
import img from "./confused-psyduck.png";
import styles from "./ErrorModal.module.css";

interface Props {
  errorMessage: string;
  retryFetch: () => void;
}

const ErrorModal = ({ errorMessage, retryFetch }: Props) => {
  const LINK_TO_NEW_GITHUB_ISSUE =
    "https://github.com/henrylin03/pokemems/issues/new?template=report-a-bug.md";

  console.error(errorMessage);

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
            >
              <Button className={styles.button}>Report issue</Button>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ErrorModal;
