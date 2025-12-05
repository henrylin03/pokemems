import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Gameboard from ".";

describe("Gameboard", () => {
  const MOCK_POKEMONS = [
    {
      id: 1,
      name: "pokemon1",
      imageUrl: "/pokemon1.png",
    },
    { id: 2, name: "pokemon2", imageUrl: "/pokemon2.png" },
    { id: 3, name: "pokemon3", imageUrl: "/pokemon3.png" },
  ];
  const EMPTY_FUNCTION = () => {
    /* adding comment to avoid linter issues */
  };

  test("allows player to choose the Pokemon to select using the 'Tab' key", async () => {
    const user = userEvent.setup();
    const { getAllByRole } = render(
      <Gameboard
        pokemons={MOCK_POKEMONS}
        setDisplayedPokemonsIds={EMPTY_FUNCTION}
        pokemonIdsSelectedThisRound={new Set()}
        updateScores={EMPTY_FUNCTION}
        setPokemonIdsSelectedThisRound={EMPTY_FUNCTION}
        setIsGameOver={EMPTY_FUNCTION}
      />,
    );

    const pokemonCardElements = getAllByRole("button");
    await user.tab();
    expect(pokemonCardElements[0]).toHaveFocus();

    await user.tab();
    expect(pokemonCardElements[1]).toHaveFocus();
  });

  test("allows player to select the Pokemon using the 'Enter' key", async () => {
    let selectedPokemonIds = new Set();
    const mockSetPokemonIdsFunction = vi.fn();
    const getUpdatedSelectedPokemonIds = (
      mockSetPokemonIdsFunction,
      prevPokemonIds,
    ) => {
      expect(mockSetPokemonIdsFunction).toHaveBeenCalled();

      const [updaterFunction] = mockSetPokemonIdsFunction.mock.lastCall;
      return updaterFunction(prevPokemonIds);
    };

    const { getAllByRole } = render(
      <Gameboard
        pokemons={MOCK_POKEMONS}
        setDisplayedPokemonsIds={EMPTY_FUNCTION}
        pokemonIdsSelectedThisRound={selectedPokemonIds}
        updateScores={EMPTY_FUNCTION}
        setPokemonIdsSelectedThisRound={mockSetPokemonIdsFunction}
        setIsGameOver={EMPTY_FUNCTION}
      />,
    );
    const pokemonCardElements = getAllByRole("button");

    const user = userEvent.setup();

    await user.tab();
    await user.tab();
    expect(pokemonCardElements[1]).toHaveFocus(); // 2nd Pokemon (ID: 2) selected
    await user.keyboard("{Enter}");

    selectedPokemonIds = getUpdatedSelectedPokemonIds(
      mockSetPokemonIdsFunction,
      selectedPokemonIds,
    );
    expect(selectedPokemonIds.has(2)).toBe(true);
  });
});
