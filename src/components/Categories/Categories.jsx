import styles from "./Categories.module.css";

import Button from "../Resuable Components/Button";

function Categories({ dispatch }) {
  return (
    <div className={styles.app}>
      <h1 className={`${styles["categories-title"]}`}>
        Choose the game's category:
      </h1>
      <div className="row">
        <Button
          disabled={true}
          functionality={() =>
            dispatch({ type: "startGame", payload: "movies" })
          }
          type={"btn-disabled"}
        >
          Movies
        </Button>
        <Button
          disabled={false}
          functionality={() =>
            dispatch({ type: "startGame", payload: "games" })
          }
          type={"btn-primary"}
        >
          Games
        </Button>
      </div>
    </div>
  );
}

export default Categories;
