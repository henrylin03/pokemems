import { useEffect } from "react";

const App = () => {
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
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }, []);

  return <></>;
};

export default App;
