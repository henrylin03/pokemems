import { useState, useEffect } from "react";
import * as z from "zod";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const PokemonApiResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string(),
  }),
});

// ? move into a data provider (context)? look at notion notes: https://www.notion.so/fetching-data-in-react-128cf1e7a6a680c386fddc6b5124274a?source=copy_link#128cf1e7a6a680fc82a1ef3778c610cb
export const useAllPokemons = (pokemonIds: number[]) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemon = async (pokemonId: number): Promise<Pokemon> => {
    const errorMessage = `An error occurred while fetching Pokemon with id ${String(pokemonId)} from PokeAPI`;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${String(pokemonId)}`,
        { mode: "cors" },
      );

      if (response.status >= 400) throw new Error(errorMessage);

      const json: unknown = await response.json();
      const data = PokemonApiResponseSchema.parse(json);

      const pokemonData: Pokemon = {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
      };

      return pokemonData;
    } catch (error) {
      throw Error(Error.isError(error) ? error.message : errorMessage);
    }
  };

  useEffect(() => {
    let shouldIgnore = false;

    const fetchAllPokemons = async (pokemonIds: number[]) => {
      try {
        const allPromises = pokemonIds.map((pokemonId) =>
          fetchPokemon(pokemonId),
        );
        const fetchedPokemons = await Promise.all(allPromises);
        if (!shouldIgnore) setPokemons(fetchedPokemons);
      } catch (error) {
        if (Error.isError(error))
          setError(
            error.message ||
              "An error occurred while fetching Pokemon data from PokeAPI",
          );
      } finally {
        setIsLoading(false);
      }
    };

    void fetchAllPokemons(pokemonIds);

    return () => {
      shouldIgnore = true;
    };
  }, [pokemonIds]);

  return { pokemons, error, isLoading };
};
