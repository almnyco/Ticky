import styles from "./index.module.css";
import React, { Fragment } from "react";

type InputProps = {
  label?: string;
  name: string;
} & React.ComponentProps<"input">;

function Input({ label, name, ...props }: InputProps) {
  return (
    <Fragment>
      {label && <label htmlFor={`input_label_${name}`}>{label}</label>}
      <input
        id={`input_label_${name}`}
        type="text"
        className={styles.input_wrapper}
        {...props}
      ></input>
    </Fragment>
  );
}

export default Input;
