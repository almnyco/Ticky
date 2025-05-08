import styles from "./taskheader.module.css";

import CheckIcon from "/public/icons/check.svg";
import Chip from "../../Chip";
import React from "react";

function TaskHeader({}) {
  return (
    <div className={styles.task_header_wrapper}>
      <Chip id="priority" text="Priority" />
      <Chip id="status" text="Status" />
      <Chip id="archive" text="Archive" />
      <Chip
        id="completed"
        text="Completed"
        icon={{ src: <CheckIcon />, align: "left" }}
      />
    </div>
  );
}

export default TaskHeader;
