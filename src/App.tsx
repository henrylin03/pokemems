import { useState } from "react";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { useHighScore } from "./hooks/useHighScore";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import LoadingScreen from "./components/LoadingScreen";
import GameOverModal from "./components/GameOverModal";
import HighScoreModal from "./components/HighScoreModal";
import ErrorModal from "./components/ErrorModal";
import {
  TOTAL_POKEMONS_DISPLAYED,
  ID_OF_LAST_POKEMON_IN_GENERATION_1,
  DEFAULT_SCORE,
  HIGH_SCORE_LOCALSTORAGE_KEY,
} from "./constants";
import { getRandomPokemonIds } from "./helpers";
import "./styles/reset.css";
import "./styles/global.css";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const App = () => {
  const [displayedPokemonIds, setDisplayedPokemonIds] = useState<number[]>(() =>
    getRandomPokemonIds(
      TOTAL_POKEMONS_DISPLAYED,
      ID_OF_LAST_POKEMON_IN_GENERATION_1,
    ),
  );
  const [pokemonIdsSelectedThisRound, setPokemonIdsSelectedThisRound] =
    useState(() => new Set<number>());
  const [currentScore, setCurrentScore] = useState<number>(DEFAULT_SCORE);
  const [highScore, setHighScore] = useHighScore(
    HIGH_SCORE_LOCALSTORAGE_KEY,
    DEFAULT_SCORE,
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const { pokemons, isLoading, error, retryFetch } =
    useAllPokemons(displayedPokemonIds);

  if (error) return <ErrorModal errorMessage={error} retryFetch={retryFetch} />;

  const updateScores = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      setIsNewHighScore(true);
    }
  };

  const resetGame = () => {
    setIsGameOver(false);
    setIsNewHighScore(false);
    setCurrentScore(DEFAULT_SCORE);

    setPokemonIdsSelectedThisRound(new Set<number>());
    setDisplayedPokemonIds(
      getRandomPokemonIds(
        TOTAL_POKEMONS_DISPLAYED,
        ID_OF_LAST_POKEMON_IN_GENERATION_1,
      ),
    );
  };

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <main>
        <Gameboard
          pokemons={pokemons}
          setDisplayedPokemonsIds={setDisplayedPokemonIds}
          pokemonIdsSelectedThisRound={pokemonIdsSelectedThisRound}
          setPokemonIdsSelectedThisRound={setPokemonIdsSelectedThisRound}
          updateScores={updateScores}
          setIsGameOver={setIsGameOver}
        />
      </main>

      {isLoading && <LoadingScreen />}

      <GameOverModal
        shouldShow={isGameOver && !isNewHighScore}
        resetGame={resetGame}
      />

      <HighScoreModal
        shouldShow={isGameOver && isNewHighScore}
        highScore={highScore}
        resetGame={resetGame}
      />
    </>
  );
};

export default App;
