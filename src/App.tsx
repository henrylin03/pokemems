import Header from "./components/Header";
import { useAllPokemons } from "./hooks/useAllPokemons";
import "./styles/reset.css";

const App = () => {
  const POKEMON_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 69];
  const { pokemons, error, isLoading } = useAllPokemons(POKEMON_IDS);

  console.log("pokemons:", pokemons);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
