import styles from "./loading.module.css";
import React from "react";

type LoadingProps = {
  size?: number;
  color?: string;
} & React.ComponentProps<"span">;

function Loading({ size = 24, color = "#fff", ...props }: LoadingProps) {
  return (
    <span
      className={styles.loading}
      style={{
        borderColor: `${color} ${color} transparent`,
        width: size,
        height: size,
      }}
      {...props}
    />
  );
}

export default Loading;
