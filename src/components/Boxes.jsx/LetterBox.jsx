import styles from "./LetterBox.module.css";

function LetterBox({ children }) {
  return <span className={styles.letter}>{children}</span>;
}

export default LetterBox;
