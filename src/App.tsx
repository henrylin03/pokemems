import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import "./styles/reset.css";
import "./styles/global.css";

export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gameboard />
      </main>
    </>
  );
};

export default App;
