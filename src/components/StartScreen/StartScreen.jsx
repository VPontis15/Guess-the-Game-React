import Button from "../Resuable Components/Button";
import styles from "./StartScreen.module.css";

function StartScreen({ dispatch }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Welcome <br></br>to <br></br> Guess The Game
      </h1>
      <div className={styles.row}>
        <Button
          functionality={() =>
            dispatch({ type: "chooseCategory", payload: "chooseCategory" })
          }
          type={"btn-primary"}
        >
          Start the game
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
