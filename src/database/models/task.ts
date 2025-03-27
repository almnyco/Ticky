import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import User from "./user";

class Task extends Model {
  id!: string;
  title!: string;
  status!: string;
  description!: string;
  permission!: number[];
  createdAt!: Date;
  updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
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
    permission: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    tableName: "Tasks",
  },
);

User.hasMany(Task, { foreignKey: "userId", as: "Tasks" });
Task.belongsTo(User, { foreignKey: "userId", as: "Users" });
export default Task;
