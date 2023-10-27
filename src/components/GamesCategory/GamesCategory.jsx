import { useEffect, useState } from "react";
import { getRandomNumber } from "../../useful Functions/GetRandomNumber";
import styles from "./GamesCategory.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";

function GamesCategory({ dispatch }) {
  useEffect(
    function () {
      const KEY = "829b60ddf5b8476987877051d2942836";
      const controller = new AbortController();
      async function fetchGames() {
        dispatch({ type: "isLoading", payload: true });
        try {
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${KEY}&page=${getRandomNumber(
              30
            )}`,
            { signal: controller.signal }
          );
          const data = await res.json();

          const gamesArray = data.results
            .map((game) => {
              return {
                name: game.name,
                score: game.metacritic,
                game_cover: game.background_image,
                genres: game.genres,
                released_date: game.released,
                id: game.id,
              };
            })
            .filter((game) => game.score);

          dispatch({
            type: "fetchGame",
            payload: gamesArray[getRandomNumber(19)],
          });

          dispatch({ type: "Loaded", payload: false });
        } catch (err) {
          console.log(err);
        }
      }
      fetchGames();
      return () => controller.abort();
    },
    [dispatch]
  );

  return null;
}

export default GamesCategory;

{
  /* <div>
{" "}
<img className={styles.cover} src={`${fetchedItem.game_cover}`} />
</div>
<h3>{fetchedItem.name.replace(/[^a-zA-Z0-9]/g, " ")}</h3>
<h3>Score: {fetchedItem.score}</h3>
<h3>Released Date: {fetchedItem.released_date}</h3> */
}
