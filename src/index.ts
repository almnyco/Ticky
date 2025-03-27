import sequelize from "./database/models/index";
import { server } from "./server";
import "dotenv/config";

// Server port
const PORT = 3000;

// Sincronizar os modelos (cria as tabelas, se não existirem)
sequelize.sync({ alter: true }).then(() => {
  console.log("Tabelas sincronizadas!");
});

server.listen(PORT, () => {
  console.log("SERVIDOR LIGADO!");
});
