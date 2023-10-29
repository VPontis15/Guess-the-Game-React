import { useEffect, useRef } from "react";
import styles from "./Input.module.css";
import {
  CheckForLetter,
  loopArrayToCheckCondintion,
} from "../../utilityFunctions/utilityFunctions.js";

function Input({ guess = "", dispatch, fetchedItem, correctGuesses }) {
  const formattedName = fetchedItem.name
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  const inputEl = useRef(null);

  useEffect(
    function () {
      inputEl.current.focus();

      function callback() {
        inputEl.current.value = "";
      }

      document.addEventListener("keydown", callback);
      () => document.addEventListener("keydown", callback);
    },
    [formattedName, guess]
  );
  return (
    <input
      placeholder="Type here"
      maxLength={1}
      className={styles.input}
      type="text"
      value={guess}
      ref={inputEl}
      onChange={(e) =>
        dispatch({
          type: "guess",
          payload: e.target.value,
        })
      }
    />
  );
}

export default Input;
