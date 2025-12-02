import GameOverModal from "./GameOverModal";

interface Props {
  isNewHighScore: boolean;
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const EndGameModal = ({ isNewHighScore, resetGame, setIsGameOver }: Props) => {
  if (!isNewHighScore)
    return (
      <GameOverModal resetGame={resetGame} setIsGameOver={setIsGameOver} />
    );

  return <></>;
};

export default EndGameModal;
