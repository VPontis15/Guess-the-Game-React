import styles from "./FetchedItem.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";

import { getRandomNumber } from "../../utilityFunctions/utilityFunctions.js";
import { memo, useEffect } from "react";

const FetchedItem = memo(function FetchedItem({
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
      <div className={styles.game}>
        {formattedWords.split(" ").map((word, i) => (
          <WordBox key={i}>
            {word.split("").map((letter, i) => (
              <LetterBox key={i}>
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
});

export default FetchedItem;
