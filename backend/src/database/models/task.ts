import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import User from "./user";

class Task extends Model {
  id!: string;
  title!: string;
  userId!: string;
  status!: string;
  startDate!: Date;
  dueDate!: Date;
  archived!: boolean;
  priority!: string;
  completeDate!: Date;
  description!: string;
  assignedTo!: number[];
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
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
    priority: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
    },
    assigned_to: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    complete_date: {
      type: DataTypes.DATE,
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Tasks",
  },
);

User.hasMany(Task, { foreignKey: "userId", as: "Tasks" });
Task.belongsTo(User, { foreignKey: "userId", as: "Users" });

export default Task;
