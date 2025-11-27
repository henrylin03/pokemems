import { useState } from "react";
import { useHighScore } from "./hooks/useHighScore";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import "./styles/reset.css";
import "./styles/global.css";
import LoadingScreen from "./components/LoadingScreen";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const App = () => {
  const HIGH_SCORE_LOCAL_STORAGE_KEY = "pokememsHighScore";
  const DEFAULT_SCORE = 0;

  const [currentScore, setCurrentScore] = useState<number>(DEFAULT_SCORE);
  const [highScore, setHighScore] = useHighScore(
    HIGH_SCORE_LOCAL_STORAGE_KEY,
    DEFAULT_SCORE,
  );

  const updateScores = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    if (newScore > highScore) setHighScore(newScore);
  };

  const resetCurrentRoundScore = () => {
    setCurrentScore(0);
  };

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <main>
        <Gameboard
          updateScores={updateScores}
          resetCurrentRoundScore={resetCurrentRoundScore}
        />
      </main>

      <LoadingScreen isLoading={true} />
    </>
  );
};

export default App;
