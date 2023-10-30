import styles from "./Won.module.css";
import Button from "../Resuable Components/Button";

function Won({ fetchedItem, seconds, minutes, dispatch }) {
  const { name, id, genres, released_date, description, game_cover, score } =
    fetchedItem;

  return (
    <section className={styles.gameModal}>
      <img
        className={styles.cover}
        src={game_cover}
        alt={`image of the game ${name}`}
      />
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.row}>
        <h2>
          Metacritic:<span> {score}</span>
        </h2>
        <h2>
          Released date: <span>{released_date}</span>
        </h2>
        <h2>{description}</h2>
      </div>{" "}
      <div className={styles.genres}>
        {genres.map((genre) => (
          <p key={genre.name}>{genre["name"]}</p>
        ))}
      </div>
      <p className={styles.message}>
        Congratulations! You found the answer in{" "}
        <span>
          {minutes && minutes < 10 ? "0" : ""}
          {minutes !== 0 && `${minutes}:`}
          {seconds < 10 ? "0" : ""}
          {seconds}
          {minutes > 0 ? " minutes" : " seconds"}!
        </span>
      </p>
      <Button
        functionality={() => dispatch({ type: "Restart" })}
        type="btn-primary"
      >
        Play Again!
      </Button>
    </section>
  );
}

export default Won;
