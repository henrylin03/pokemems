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

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <main>
        <Gameboard />
      </main>
    </>
  );
};

export default App;
