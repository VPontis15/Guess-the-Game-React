import styles from "./Game.module.css";
import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";

function Game({ formattedName, fetchedItem, dispatch, guess, correctGuesses }) {
  return (
    <section className={styles.game}>
      <FetchedItem
        guess={guess}
        dispatch={dispatch}
        fetchedItem={fetchedItem}
        correctGuesses={correctGuesses}
        formattedName={formattedName}
      />
      <Input dispatch={dispatch} fetchedItem={fetchedItem} guess={guess} />
    </section>
  );
}

export default Game;
