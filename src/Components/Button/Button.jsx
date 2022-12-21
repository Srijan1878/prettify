import React from "react";
import styles from "./Button.module.css";

function Button({ title, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  );
}

export default Button;
