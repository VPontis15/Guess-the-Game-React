import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import FetchedItem from "./components/FetchedItem/FetchedItem";
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
      return { ...state, isLoading: action.payload };
    default:
      throw new Error("wrong input");
  }
}

function App() {
  const [{ fetchedItem, isLoading, hasStarted, category, status }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div className="app">
      {!hasStarted && <StartScreen dispatch={dispatch} />}
      {status === "chooseCategory" && <Categories dispatch={dispatch} />}
      {status === "startGame" && category === "movies" && <p>Movies</p>}
      {status === "startGame" && category === "games" && (
        <GamesCategory dispatch={dispatch} />
      )}
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <FetchedItem fetchedItem={fetchedItem} />
      )}
    </div>
  );
}

export default App;
