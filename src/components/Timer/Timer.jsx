import styles from "./Timer.module.css";
import { useEffect } from "react";

function Timer({ minutes, seconds, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <h2 className={styles.timer}>{`${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`}</h2>
  );
}

export default Timer;
