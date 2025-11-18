import { useState, useEffect } from "react";

interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
}

export const useAllPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // todo: might need to fetch data like the docs to clean up effect: https://react.dev/learn/synchronizing-with-effects#fetching-data
    // todo: refactor to use async/await
    fetch("https://pokeapi.co/api/v2/pokemon/69", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400)
          throw new Error("error when retrieving Pokemon data from PokeAPI");
        return response.json();
      })
      .then((response) => {
        console.log(response);
        const pokemonData: PokemonData = {
          id: response.id,
          name: response.name,
          imageUrl: response.sprites.front_default,
        };
        setPokemons([...pokemons, pokemonData]);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) setError(error);
      });
  }, []);

  return { pokemons, error, isLoading };
};
