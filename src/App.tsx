import { useState } from "react";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { useHighScore } from "./hooks/useHighScore";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import LoadingScreen from "./components/LoadingScreen";
import EndGameModal from "./components/EndGameModal";
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
  const { pokemons, isLoading } = useAllPokemons(displayedPokemonIds);
  // TODO: THESE STATES NEED REFACTORING -- WE HAVE WAY TOO MANY...

  const updateScores = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      setIsNewHighScore(true);
    }
  };

  const resetGame = () => {
    setPokemonIdsSelectedThisRound(new Set<number>());
    setCurrentScore(DEFAULT_SCORE);
    setIsNewHighScore(false);
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

      {isGameOver && (
        <EndGameModal
          isNewHighScore={isNewHighScore}
          highScore={highScore}
          resetGame={resetGame}
          setIsGameOver={setIsGameOver}
        />
      )}
    </>
  );
};

export default App;
