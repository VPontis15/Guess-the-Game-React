import styles from "./Button.module.css";

function Button({
  children,
  disabled,
  animation = "",
  type = "",
  functionality,
}) {
  return (
    <button
      disabled={disabled}
      onClick={functionality}
      className={`${styles.btn} ${styles[type]} ${styles[animation]}`}
    >
      {children}
    </button>
  );
}

export default Button;
