import styles from "./Game.module.css";
import FetchedItem from "../FetchedItem/FetchedItem";
import Input from "../Input/Input";
import Video from "../Resuable Components/Video";

function Game({ fetchedItem, isLoading }) {
  return (
    <section className={styles.game}>
      <FetchedItem fetchedItem={fetchedItem} />
      <Input />
    </section>
  );
}

export default Game;
