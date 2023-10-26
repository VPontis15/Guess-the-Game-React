import { useEffect, useState } from "react";
import { getRandomNumber } from "../../useful Functions/GetRandomNumber";
import styles from "./GamesCategory.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";

function GamesCategory() {
  const [currentGame, setCurrentGame] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function handleCurrentGame(game) {
    setCurrentGame(game);
  }
  useEffect(function () {
    const KEY = "829b60ddf5b8476987877051d2942836";
    const controller = new AbortController();
    async function fetchGames() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${KEY}&page=${getRandomNumber(30)}`,
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

      handleCurrentGame(gamesArray[getRandomNumber(19)]);

      setIsLoading(false);
    }
    fetchGames();
    return () => controller.abort();
  }, []);

  return (
    <div className={styles.game}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentGame.name
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .split(" ")
            .map((word) => (
              <WordBox>
                {word.split("").map((letter) => (
                  <LetterBox>
                    <p className="row">{letter}</p>{" "}
                  </LetterBox>
                ))}
              </WordBox>
            ))}
        </>
      )}
    </div>
  );
}

export default GamesCategory;

{
  /* <div>
{" "}
<img className={styles.cover} src={`${currentGame.game_cover}`} />
</div>
<h3>{currentGame.name.replace(/[^a-zA-Z0-9]/g, " ")}</h3>
<h3>Score: {currentGame.score}</h3>
<h3>Released Date: {currentGame.released_date}</h3> */
}
