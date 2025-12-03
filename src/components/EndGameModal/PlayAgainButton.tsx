import Button from "../ui/Button";

interface Props {
  onClick: () => void;
}

const PlayAgainButton = ({ onClick }: Props) => (
  <Button onClick={onClick}>Play again</Button>
);

export default PlayAgainButton;
