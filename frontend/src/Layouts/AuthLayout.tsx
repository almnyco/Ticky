import styles from "./layout.module.css";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.root_page_wrapper}>{children}</div>;
}

export default AuthLayout;
