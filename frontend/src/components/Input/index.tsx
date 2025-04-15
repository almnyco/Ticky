import styles from "./index.module.css";
import React from "react";

type InputProps = {
  fullWidth?: boolean;
  label?: string;
  name: string;
} & React.ComponentProps<"input">;

function Input({ label, fullWidth = false, name, ...props }: InputProps) {
  return (
    <div
      className={`${styles.input_wrapper}  ${
        fullWidth && styles.input_full_width
      }`}
    >
      <input
        id={`input_label_${name}`}
        type="text"
        className={styles.input}
        {...props}
      />
      {label && (
        <label htmlFor={`input_label_${name}`} className={styles.input_label}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Input;
