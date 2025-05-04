"use client";

import useLoadedApplication from "../hooks/useLoadedApplication";
import styles from "./layout.module.css";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const isLoaded = useLoadedApplication();

  if (!isLoaded) return <></>;
  return <div className={styles.root_page_wrapper}>{children}</div>;
}

export default AuthLayout;
