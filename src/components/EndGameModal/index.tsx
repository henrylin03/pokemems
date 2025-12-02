import GameOverModal from "./GameOverModal";
import NewHighScoreModal from "./NewHighScoreModal";

interface Props {
  isNewHighScore: boolean;
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const EndGameModal = ({ isNewHighScore, resetGame, setIsGameOver }: Props) => {
  if (isNewHighScore) return <NewHighScoreModal />;
  return <GameOverModal resetGame={resetGame} setIsGameOver={setIsGameOver} />;
};

export default EndGameModal;
