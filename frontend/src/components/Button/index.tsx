import styles from "./index.module.css";
import React from "react";

type InputProps = {
  text?: string;
} & React.ComponentProps<"button">;

function Button({ children, ...props }: InputProps) {
  return (
    <button className={styles.button_wrapper} {...props}>
      {children}
    </button>
  );
}

export default Button;
