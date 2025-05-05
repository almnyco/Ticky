"use client";

import styles from "./button.module.css";
import Loading from "../Loading/index";
import React from "react";

type InputProps = { isLoading?: boolean } & React.ComponentProps<"button">;

function Button({ children, isLoading = false, ...props }: InputProps) {
  return (
    <button className={styles.button_wrapper} title="button" {...props}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}

export default Button;
