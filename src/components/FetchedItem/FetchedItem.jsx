import styles from "./FetchedItem.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";

import { getRandomNumber } from "../../utilityFunctions/utilityFunctions.js";

function FetchedItem({ fetchedItem, formattedName, correctGuesses }) {
  if (!fetchedItem) return;
  const formattedWords = fetchedItem.name
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "");
  const uniqueLetters = new Set(formattedName).size;
  console.log(uniqueLetters.size, correctGuesses.length);

  return (
    <div className={styles.game}>
      {correctGuesses.length !== uniqueLetters ? (
        formattedWords.split(" ").map((word) => (
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
        ))
      ) : (
        <>
          <p className={styles.victory}>You Won</p>
        </>
      )}
    </div>
  );
}

export default FetchedItem;
