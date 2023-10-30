import styles from "./Won.module.css";

function Won({ fetchedItem }) {
  const { name, id, released_date, description, game_cover, score } =
    fetchedItem;

  return (
    <section className={styles.gameModal}>
      <img
        className={styles.cover}
        src={game_cover}
        alt={`image of the game ${name}`}
      />
      <div className={styles.row}>
        <h1>{name}</h1>
        <h2>Metacritic: {score}</h2>
        <h2>Released date: {released_date}</h2>
        <h2>{description}</h2>
      </div>
    </section>
  );
}

export default Won;
