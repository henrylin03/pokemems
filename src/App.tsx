import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // todo: might need to fetch data like the docs to clean up effect: https://react.dev/learn/synchronizing-with-effects#fetching-data
    fetch("https://pokeapi.co/api/v2/pokemon/69", { mode: "cors" })
      .then((response) => response.json())
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
