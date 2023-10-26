import styles from "./Button.module.css";

function Button({ children, type = "", functionality }) {
  return (
    <button onClick={functionality} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
