import styles from "./Game.module.css";
import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";

function Game({ fetchedItem }) {
  return (
    <section className={styles.game}>
      <FetchedItem fetchedItem={fetchedItem} />
      <Input />
    </section>
  );
}

export default Game;
