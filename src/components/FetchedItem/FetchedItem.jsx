import styles from "./FetchedItem.module.css";
import WordBox from "../Boxes.jsx/WordBox";
import LetterBox from "../Boxes.jsx/LetterBox";
import Spinner from "../Spinner/Spinner";
import { getRandomNumber } from "../../useful Functions/GetRandomNumber";

function FetchedItem({ fetchedItem, isLoading }) {
  return (
    <div className={styles.game}>
      {fetchedItem.name
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(" ")
        .map((word) => (
          <WordBox key={getRandomNumber(400000000)}>
            {word.split("").map((letter) => (
              <LetterBox key={getRandomNumber(44444442432435)}>
                <p className="row">{letter}</p>{" "}
              </LetterBox>
            ))}
          </WordBox>
        ))}
    </div>
  );
}

export default FetchedItem;
