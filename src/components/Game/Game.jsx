import styles from "./Game.module.css";
import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";
import Won from "../Won/Won";

function Game({
  formattedName,
  fetchedItem,
  hasWon,
  dispatch,
  guess,
  correctGuesses,
  seconds,
  minutes,
  wrongGuesses,
}) {
  return (
    <section className={styles.game}>
      <FetchedItem
        guess={guess}
        dispatch={dispatch}
        fetchedItem={fetchedItem}
        correctGuesses={correctGuesses}
        formattedName={formattedName}
        seconds={seconds}
        minutes={minutes}
        wrongGuesses={wrongGuesses}
      />
      <Input
        wrongGuesses={wrongGuesses}
        dispatch={dispatch}
        fetchedItem={fetchedItem}
        guess={guess}
      />
    </section>
  );
}

export default Game;
