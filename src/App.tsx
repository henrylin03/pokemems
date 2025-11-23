import { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import "./styles/reset.css";
import "./styles/global.css";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const App = () => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);

  const updateScores = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    if (newScore > highScore) setHighScore(newScore);
  };

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <main>
        <Gameboard updateScores={updateScores} />
      </main>
    </>
  );
};

export default App;
