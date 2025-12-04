import { useState, useEffect } from "react";
import * as z from "zod";
import type { Pokemon } from "../App";

interface HookReturnObject {
  pokemons: Pokemon[];
  error: string | null;
  isLoading: boolean;
  retryFetch: () => Promise<void>;
}

const PokemonApiResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  sprites: z.object({
    front_default: z.string(),
  }),
});

export const useAllPokemons = (pokemonIds: number[]): HookReturnObject => {
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

      const imageUrl = data.sprites.front_default;
      await new Promise((resolve) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = resolve;
      });

      const pokemonData = {
        id: data.id,
        name: data.name,
        imageUrl,
      };

      return pokemonData;
    } catch (error) {
      throw Error(Error.isError(error) ? error.message : errorMessage);
    }
  };

  const fetchAllPokemons = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const allPromises = pokemonIds.map((pokemonId) =>
        fetchPokemon(pokemonId),
      );
      const fetchedPokemons = await Promise.all(allPromises);
      setPokemons(fetchedPokemons);
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

  useEffect(() => void fetchAllPokemons(), [pokemonIds]);

  return { pokemons, error, isLoading, retryFetch: fetchAllPokemons };
};
