import { useEffect, useState } from "react";
import { getRandomNumber } from "../../utilityFunctions/utilityFunctions";

function GamesCategory({ dispatch, children }) {
  useEffect(
    function () {
      const KEY = "829b60ddf5b8476987877051d2942836";
      const controller = new AbortController();
      async function fetchGames() {
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
                description: game.description,
                platforms: game.platforms,
                reddit: game.reddit,
              };
            })
            .filter((game) => game.score);

          dispatch({
            type: "fetchGame",
            payload: gamesArray[getRandomNumber(data.results.length - 1)],
          });

          dispatch({ type: "Loaded", payload: false, status: "Loaded" });
        } catch (err) {
          console.log(err);
        }
      }
      fetchGames();
      return () => controller.abort();
    },
    [dispatch]
  );

  return children;
}

export default GamesCategory;
