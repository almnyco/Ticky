import styles from "./list.module.css";
import React from "react";

type TaskListProps = {} & React.ComponentProps<"div">;

function TaskList({ children, ...props }: TaskListProps) {
  return (
    <div className={styles.task_list_wrapper} {...props}>
      {children}
    </div>
  );
}

export default TaskList;
