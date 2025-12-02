import GameOverModal from "./GameOverModal";
import NewHighScoreModal from "./NewHighScoreModal";

interface Props {
  isNewHighScore: boolean;
  resetGame: () => void;
  setIsGameOver: (isGameOverState: boolean) => void;
}

const EndGameModal = ({ isNewHighScore, resetGame, setIsGameOver }: Props) => {
  if (isNewHighScore) return <NewHighScoreModal newHighScore={3} />;
  return <GameOverModal resetGame={resetGame} setIsGameOver={setIsGameOver} />;
};

export default EndGameModal;
