import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Task from "./task";
import TaskGroups from "./taskgroups";

class TaskGroupTask extends Model {
  taskId!: string;
  groupId!: string[];
}

TaskGroupTask.init(
  {
    taskId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: Task,
        key: "id",
      },
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: TaskGroups,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "TaskGroupTask",
  },
);

Task.belongsToMany(TaskGroups, {
  through: TaskGroupTask,
  foreignKey: "groupId",
});
TaskGroupTask.belongsToMany(Task, {
  through: TaskGroupTask,
  foreignKey: "groupId",
});

export default TaskGroupTask;
