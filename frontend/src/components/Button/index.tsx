"use client";

import styles from "./button.module.css";
import Loading from "../Loading/index";
import React from "react";

type ButtonProps = {
  isLoading?: boolean;
  fullWidth?: boolean;
} & React.ComponentProps<"button">;

function Button({
  children,
  fullWidth = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button_wrapper} ${
        fullWidth && styles.button_full_width
      }`}
      title="button"
      type="button"
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
}

export default Button;
