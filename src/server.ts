import cookieParser from "cookie-parser";
import { routes } from "./routes";
import express from "express";
import cors from "cors";

// Server port
const PORT = 3000;

const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS?.split(";") || [],
  }),
);
app.use(express.json());

function main() {
  app.listen(PORT, () => {
    console.log("SERVIDOR LIGADO!");
  });

  routes(app);
}

export { main };
