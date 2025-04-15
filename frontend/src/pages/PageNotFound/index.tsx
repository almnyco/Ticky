import styles from "./index.module.css";
import React from "react";

function PageNotFound() {
  return (
    <div className={styles.page_not_found_wrapper}>
      <h2 className={styles.page_not_found_text}>Página não encontrada</h2>
    </div>
  );
}

export default PageNotFound;
