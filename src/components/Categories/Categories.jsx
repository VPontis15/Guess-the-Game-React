import styles from "./Categories.module.css";

import Button from "../Resuable Components/Button";

function Categories({ dispatch }) {
  return (
    <div className="app">
      <h1 className={`${styles["categories-title"]}`}>
        Choose the game's category:
      </h1>
      <div className="row">
        <Button
          functionality={() =>
            dispatch({ type: "startGame", payload: "movies" })
          }
          type={"btn-primary"}
        >
          Movies
        </Button>
        <Button
          functionality={() =>
            dispatch({ type: "startGame", payload: "games" })
          }
          type={"btn-secondary"}
        >
          Games
        </Button>
      </div>
    </div>
  );
}

export default Categories;
