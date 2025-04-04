import { Dialect, Sequelize } from "sequelize";
import dbConfig from "../config";

export default new Sequelize(
  dbConfig.development.database!,
  dbConfig.development.user!,
  dbConfig.development.password,
  {
    dialect: dbConfig.development.dialect as Dialect,
    host: dbConfig.development.host,
  },
);
