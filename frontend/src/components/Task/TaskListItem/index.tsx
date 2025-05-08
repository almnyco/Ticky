import styles from "./list.module.css";
import React from "react";

type TaskListItemProps = {} & React.ComponentProps<"div">;

function TaskListItem({ children, ...props }: TaskListItemProps) {
  return (
    <div className={styles.task_item_wrapper} {...props}>
      {children}
    </div>
  );
}

export default TaskListItem;
