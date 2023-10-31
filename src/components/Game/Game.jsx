import styles from "./Game.module.css";
import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";
import Timer from "../Timer/Timer";

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
      <Timer dispatch={dispatch} minutes={minutes} seconds={seconds} />

      <FetchedItem
        dispatch={dispatch}
        fetchedItem={fetchedItem}
        correctGuesses={correctGuesses}
        formattedName={formattedName}
        wrongGuesses={wrongGuesses}
      />
      <Input dispatch={dispatch} fetchedItem={fetchedItem} guess={guess} />
    </section>
  );
}

export default Game;
