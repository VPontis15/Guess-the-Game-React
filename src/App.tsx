import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import Game from "./components/Game/Game";
import Video from "./components/Resuable Components/Video";
import Spinner from "./components/Spinner/Spinner";
import Won from "./components/Won/Won";
import { useReducer } from "react";

const initialState = {
  hasStarted: false,
  fetchedItem: "",
  category: "",
  status: "",
  isLoading: true,
  guess: "",
  correctGuesses: [],
  formattedName: "",
  hasWon: false,
  wrongGuesses: [],
  seconds: 0,
  minutes: 0,
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
    case "Won":
      return { ...state, hasWon: true, status: "Won" };
    case "tick":
      return {
        ...state,
        seconds: state.seconds < 60 ? state.seconds + 1 : 0,
        minutes: state.seconds === 60 ? state.minutes + 1 : state.minutes,
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
      hasWon,
      wrongGuesses,
      seconds,
      minutes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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
              hasWon={hasWon}
              fetchedItem={fetchedItem}
              formattedName={formattedName}
              guess={guess}
              dispatch={dispatch}
              isLoading={isLoading}
              correctGuesses={correctGuesses}
              seconds={seconds}
              minutes={minutes}
            />
          ) : (
            !hasWon && <Spinner />
          )}
        </GamesCategory>
      )}
      {status === "Won" && <Won fetchedItem={fetchedItem} />}
    </div>
  );
}

export default App;
