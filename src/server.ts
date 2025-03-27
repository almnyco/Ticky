import { router } from "./routes";
import express from "express";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.CORS?.split(";") || [],
  }),
);
server.use(express.json());

server.use(router);

export { server };
