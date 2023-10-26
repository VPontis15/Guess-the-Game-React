import StartScreen from "./components/StartScreen/StartScreen";
import Categories from "./components/Categories/Categories";
import GamesCategory from "./components/GamesCategory/GamesCategory";
import { useReducer } from "react";

const initialState = {
  hasStarted: false,
  category: "",
  status: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "chooseCategory":
      return { ...state, hasStarted: true, status: action.payload };
    case "startGame":
      return { ...state, category: action.payload, status: "startGame" };
    default:
      throw new Error("wrong input");
  }
}

function App() {
  const [{ hasStarted, category, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app">
      {!hasStarted && <StartScreen dispatch={dispatch} />}
      {status === "chooseCategory" && <Categories dispatch={dispatch} />}
      {status === "startGame" && category === "movies" && <p>Movies</p>}
      {status === "startGame" && category === "games" && <GamesCategory />}
    </div>
  );
}

export default App;
