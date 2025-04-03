import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
class TaskGroups extends Model {
  id!: string;
  title!: string;
  status!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

TaskGroups.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "TaskGroup",
  },
);

export default TaskGroups;
