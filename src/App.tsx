import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import Game from "./components/Game/Game";
import Video from "./components/Resuable Components/Video";
import Spinner from "./components/Spinner/Spinner";
import Won from "./components/Won/Won";
import { useReducer } from "react";
import Input from "./components/Input/Input";
import MoviesCategory from "./components/MoviesCategory/MoviesCategory";

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
        formattedName: action.payload?.name
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
        wrongGuesses:
          !state.formattedName.includes(action.payload) &&
          !state.wrongGuesses.includes(action.payload)
            ? [...state.wrongGuesses, action.payload]
            : [...state.wrongGuesses],
      };
    case "Won":
      return { ...state, hasWon: true, status: "Won" };
    case "tick":
      return {
        ...state,
        seconds: state.seconds < 60 ? state.seconds + 1 : 0,
        minutes: state.seconds === 60 ? state.minutes + 1 : state.minutes,
      };
    case "Restart":
      return initialState;
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
      {category === "movies" && <MoviesCategory dispatch={dispatch} />}
      {category === "games" && (
        <GamesCategory dispatch={dispatch}>
          {status === "Loaded" ? (
            <>
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
                wrongGuesses={wrongGuesses}
              />
            </>
          ) : (
            !hasWon && <Spinner />
          )}
        </GamesCategory>
      )}
      {status === "Won" && (
        <Won
          minutes={minutes}
          seconds={seconds}
          dispatch={dispatch}
          fetchedItem={fetchedItem}
        />
      )}
    </div>
  );
}

export default App;
