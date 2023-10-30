import styles from "./FetchedItem.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";

import { getRandomNumber } from "../../utilityFunctions/utilityFunctions.js";
import { useEffect } from "react";
import Timer from "../Timer/Timer";

function FetchedItem({
  seconds,
  minutes,
  fetchedItem,
  dispatch,
  formattedName,
  correctGuesses,
}) {
  const formattedWords = fetchedItem?.name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "");

  useEffect(
    function () {
      const uniqueLetters = new Set(formattedName).size;

      if (correctGuesses.length === uniqueLetters) dispatch({ type: "Won" });
    },
    [correctGuesses.length, dispatch, formattedName]
  );

  return (
    <>
      <Timer dispatch={dispatch} minutes={minutes} seconds={seconds} />

      <div className={styles.game}>
        {formattedWords.split(" ").map((word) => (
          <WordBox key={getRandomNumber(400000000)}>
            {word.split("").map((letter) => (
              <LetterBox key={getRandomNumber(44444442432435)}>
                <p
                  className={
                    correctGuesses.includes(letter)
                      ? `${styles["revealed"]}`
                      : ""
                  }
                >
                  {letter}
                </p>
              </LetterBox>
            ))}
          </WordBox>
        ))}
      </div>
    </>
  );
}

export default FetchedItem;
