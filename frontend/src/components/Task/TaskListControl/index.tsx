import styles from "./list.module.css";
import React from "react";

type TaskListControlProps = {} & React.ComponentProps<"div">;

function TaskListControl({ children, ...props }: TaskListControlProps) {
  return (
    <div className={styles.task_control_wrapper} {...props}>
      {children}
    </div>
  );
}

export default TaskListControl;
