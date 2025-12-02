import { useState } from "react";
import { useAllPokemons } from "./hooks/useAllPokemons";
import { useHighScore } from "./hooks/useHighScore";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import LoadingScreen from "./components/LoadingScreen";
import GameOverModal from "./components/GameOverModal";
import { getRandomPokemonIds } from "./helpers";
import "./styles/reset.css";
import "./styles/global.css";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const App = () => {
  const DEFAULT_SCORE = 0;
  const HIGH_SCORE_LOCAL_STORAGE_KEY = "pokememsHighScore";
  const TOTAL_POKEMONS_DISPLAYED = 10;
  const ID_OF_LAST_POKEMON_IN_GENERATION_1 = 150;

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
    HIGH_SCORE_LOCAL_STORAGE_KEY,
    DEFAULT_SCORE,
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const { pokemons, isLoading } = useAllPokemons(displayedPokemonIds);

  const updateScores = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);

    if (newScore > highScore) setHighScore(newScore);
  };

  const resetGame = () => {
    setPokemonIdsSelectedThisRound(new Set<number>());
    setCurrentScore(DEFAULT_SCORE);
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
          totalPokemonsDisplayed={TOTAL_POKEMONS_DISPLAYED}
          maxPokemonId={ID_OF_LAST_POKEMON_IN_GENERATION_1}
          pokemons={pokemons}
          setDisplayedPokemonsIds={setDisplayedPokemonIds}
          pokemonIdsSelectedThisRound={pokemonIdsSelectedThisRound}
          setPokemonIdsSelectedThisRound={setPokemonIdsSelectedThisRound}
          updateScores={updateScores}
          setIsGameOver={setIsGameOver}
        />
      </main>

      {/* modals */}
      <LoadingScreen isVisible={isLoading} />
      <GameOverModal
        isVisible={true}
        resetGame={resetGame}
        setIsGameOver={setIsGameOver}
      />
    </>
  );
};

export default App;
