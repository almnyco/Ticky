"use client";

import TaskHeader from "@/src/components/Task/TaskHeader";
// import HomeIcon from "/public/icons/home.svg";
// import Chip from "@/src/components/Chip";
import styles from "@/src/styles/main.page.module.css";
import React from "react";

function Home() {
  return (
    <div className={styles.main_content_wrapper}>
      <TaskHeader />
    </div>
  );
}

export default Home;
