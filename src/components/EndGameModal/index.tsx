import GameOverModal from "./GameOverModal";
import NewHighScoreModal from "./NewHighScoreModal";

interface Props {
  isNewHighScore: boolean;
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const EndGameModal = ({ isNewHighScore, resetGame, setIsGameOver }: Props) => {
  const handleClickOnPlayAgainButton = () => {
    setIsGameOver(false);
    resetGame();
  };

  if (isNewHighScore)
    return (
      <NewHighScoreModal
        newHighScore={3}
        handleClickOnPlayAgainButton={handleClickOnPlayAgainButton}
      />
    );

  return (
    <GameOverModal
      handleClickOnPlayAgainButton={handleClickOnPlayAgainButton}
    />
  );
};

export default EndGameModal;
