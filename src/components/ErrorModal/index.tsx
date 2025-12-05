import Button from "../ui/Button";
import Modal from "../ui/Modal";
import img from "./confused-psyduck.png";

interface Props {
  errorMessage: string;
  retryFetch: () => Promise<void>;
}

const LINK_TO_NEW_GITHUB_ISSUE =
  "https://github.com/henrylin03/pokemems/issues/new?template=report-a-bug.md";

const ErrorModal = ({ errorMessage, retryFetch }: Props) => {
  console.error("Error:", errorMessage);
  return (
    <Modal shouldShow={Boolean(errorMessage)}>
      <img src={img} alt="Confused Psyduck" loading="lazy" />
      <div>
        <h1>Uh oh!</h1>
        <p>
          There's been an issue retrieving the Pokémons.
          <br /> Please check your internet connection and try again.
        </p>
      </div>
      <ul>
        <li>
          {/* TODO: fix type error here */}
          <Button onClick={retryFetch}>Try again</Button>
        </li>
        <li>
          <a
            href={LINK_TO_NEW_GITHUB_ISSUE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Report issue on GitHub"
          >
            <Button>Report issue</Button>
          </a>
        </li>
      </ul>
    </Modal>
  );
};

export default ErrorModal;
