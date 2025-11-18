import { useState, useEffect } from "react";

interface PokemonData {
  id: number;
  name: string;
  imageUrl: string;
}

export const useAllPokemons = (pokemonIds: number[]) => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async (pokemonId: number) => {
    const errorMessage = `An error occurred while fetching Pokemon with id ${String(pokemonId)} from PokeApi`;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${String(pokemonId)}`,
        { mode: "cors" },
      );

      if (response.status >= 400) throw new Error(errorMessage);

      const data = await response.json();
      const pokemonData: PokemonData = {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
      };

      return pokemonData;
    } catch (error) {
      if (error instanceof Error) setError(error.message || errorMessage);
    }
  };

  useEffect(() => {
    // todo: might need to fetch data like the docs to clean up effect: https://react.dev/learn/synchronizing-with-effects#fetching-data
    const fetchAllPokemons = async (pokemonIds: number[]) => {
      try {
        const allPromises = pokemonIds.map((pokemonId) =>
          fetchPokemon(pokemonId),
        );
        const fetchedPokemons = await Promise.all(allPromises);
        setPokemons(fetchedPokemons);
      } catch (error) {
        if (error instanceof Error)
          setError(
            error.message ||
              "An error occurred while fetching Pokemon data from PokeAPI",
          );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPokemons(pokemonIds);
  }, [pokemonIds]);

  return { pokemons, error, isLoading };
};
