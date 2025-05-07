"use client";

import styles from "./input.module.css";
import React from "react";

type InputProps = {
  fullWidth?: boolean;
  helperText?: string;
  label?: string;
  error?: string;
  name: string;
} & React.ComponentProps<"input">;

function Input({
  label,
  error,
  helperText,
  fullWidth = false,
  name,
  ...props
}: InputProps) {
  return (
    <div
      className={`${styles.input_wrapper}  ${
        fullWidth && styles.input_full_width
      }`}
    >
      <input
        type="text"
        name={name}
        id={`input_${name}`}
        className={`${styles.input} ${error && styles.input_error}`}
        {...props}
      />
      {label && (
        <label htmlFor={`input_${name}`} className={styles.input_label}>
          {label}
        </label>
      )}
      {helperText && (
        <span className={styles.input_helper_text}>{helperText}</span>
      )}
      {error && <span className={styles.input_error_text}>{error}</span>}
    </div>
  );
}

export default Input;
