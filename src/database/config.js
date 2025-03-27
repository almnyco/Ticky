// import { Dialect } from "sequelize";
import "dotenv/config";

// type DatabaseConfig = {
//   user: string,
//   host: string,
//   database: string,
//   password: string,
//   port: string,
//   dialect: Dialect,
// }

const config = {
  development: {
    user: process.env.DB_USER,
    host: "127.0.0.1",
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
};

export default config;
