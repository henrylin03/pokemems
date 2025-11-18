import { useAllPokemons } from "./hooks/useAllPokemons";

const App = () => {
  const { pokemons, error, isLoading } = useAllPokemons();

  console.log("pokemons:", pokemons);

  return <></>;
};

export default App;
