import styles from "./Input.module.css";

function Input() {
  return (
    <input
      placeholder="Type here"
      maxLength={1}
      className={styles.input}
      type="text"
    />
  );
}

export default Input;
