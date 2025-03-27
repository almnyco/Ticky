import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import Task from "./task";

class User extends Model {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  photo!: string;
  role!: string;
  password!: string;
  date_birth!: Date;
  password_expiresAt!: string;
  createdAt!: Date;
  updatedAt!: Date;

  // Relations
  public getTasks!: () => Promise<Task[]>;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_birth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    password_expiresAt: {
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
  },
  {
    sequelize,
    tableName: "Users",
  },
);

export default User;
