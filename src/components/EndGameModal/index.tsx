import GameOverModal from "./GameOverModal";
import NewHighScoreModal from "./NewHighScoreModal";

interface Props {
  isNewHighScore: boolean;
  highScore: number;
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const EndGameModal = ({
  isNewHighScore,
  highScore,
  resetGame,
  setIsGameOver,
}: Props) => {
  const handleClickOnPlayAgainButton = () => {
    setIsGameOver(false);
    resetGame();
  };

  if (isNewHighScore)
    return (
      <NewHighScoreModal
        newHighScore={highScore}
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
