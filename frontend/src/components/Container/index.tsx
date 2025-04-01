"use client";

import React from "react";
import styles from "./index.module.css";

type ContainerType = {
  children: React.ReactNode;
};

function Container({ children }: ContainerType) {
  return <div className={styles.container_wrapper}>{children}</div>;
}

export default Container;
