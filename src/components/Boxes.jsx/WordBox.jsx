import styles from "./WordBox.module.css";

function WordBox({ children }) {
  return <div className={styles.box}>{children}</div>;
}

export default WordBox;
