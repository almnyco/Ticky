import sequelize from "./database/models/index";
import { main } from "./server";
import "dotenv/config";

// Sincronizar os modelos (cria as tabelas, se não existirem)
sequelize.sync({ alter: true }).then(() => {
  console.log("Tabelas sincronizadas!");
});

main();
