import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import Game from "./components/Game/Game";
import Video from "./components/Resuable Components/Video";
import Spinner from "./components/Spinner/Spinner";
import { useReducer } from "react";

const initialState = {
  hasStarted: false,
  fetchedItem: "",
  category: "",
  status: "",
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "chooseCategory":
      return { ...state, hasStarted: true, status: action.payload };
    case "startGame":
      return { ...state, category: action.payload, status: "startGame" };
    case "fetchGame":
      return { ...state, fetchedItem: action.payload, status: "ready" };
    case "isLoading":
      return { ...state, isLoading: action.payload };
    case "Loaded":
      return { ...state, isLoading: action.payload, status: "Loaded" };
    default:
      throw new Error("wrong input");
  }
}

function App() {
  const [{ fetchedItem, isLoading, hasStarted, category, status }, dispatch] =
    useReducer(reducer, initialState);
  console.log(status);

  return (
    <div className="app">
      <Video />
      {!hasStarted && <StartScreen dispatch={dispatch} />}
      {status === "chooseCategory" && <Categories dispatch={dispatch} />}
      {status === "startGame" && category === "movies" && <p>Movies</p>}
      {status === "startGame" && category === "games" && (
        <GamesCategory dispatch={dispatch} />
      )}

      {status === "Loaded" ? (
        <Game fetchedItem={fetchedItem} isLoading={isLoading} />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default App;
