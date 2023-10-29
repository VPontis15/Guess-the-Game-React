import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import Game from "./components/Game/Game";
import Video from "./components/Resuable Components/Video";
import Spinner from "./components/Spinner/Spinner";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const initialState = {
  hasStarted: false,
  fetchedItem: "",
  category: "",
  status: "",
  isLoading: true,
  guess: "",
  correctGuesses: [],
  formattedName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "chooseCategory":
      return { ...state, hasStarted: true, status: action.payload };
    case "startGame":
      return { ...state, category: action.payload, status: "startGame" };
    case "fetchGame":
      return {
        ...state,
        fetchedItem: action.payload,
        status: "ready",
        formattedName: action.payload.name
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, ""),
      };

    case "Loaded":
      return { ...state, isLoading: action.payload, status: "Loaded" };
    case "guess":
      return {
        ...state,
        guess: action.payload,
        correctGuesses:
          state.formattedName.includes(action.payload) &&
          !state.correctGuesses.includes(action.payload)
            ? [...state.correctGuesses, action.payload]
            : [...state.correctGuesses],
      };

    default:
      throw new Error("wrong input");
  }
}

function App() {
  const [
    {
      formattedName,
      correctGuesses,
      fetchedItem,
      guess,
      isLoading,
      hasStarted,
      category,
      status,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  console.log(correctGuesses);
  return (
    <div className="app">
      <Video />
      {!hasStarted && <StartScreen dispatch={dispatch} />}
      {status === "chooseCategory" && <Categories dispatch={dispatch} />}
      {status === "startGame" && category === "movies" && <p>Movies</p>}
      {category === "games" && (
        <GamesCategory dispatch={dispatch}>
          {status === "Loaded" ? (
            <Game
              fetchedItem={fetchedItem}
              formattedName={formattedName}
              guess={guess}
              dispatch={dispatch}
              isLoading={isLoading}
              correctGuesses={correctGuesses}
            />
          ) : (
            <Spinner />
          )}
        </GamesCategory>
      )}
    </div>
  );
}

export default App;
