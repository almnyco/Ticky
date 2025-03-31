import TaskController from "@/controllers/TaskController";
// import ApiHandler from "@/middlewares/ApiHandler";
import { Router } from "express";

const TaskRouter = Router();

TaskRouter.post("/task", TaskController.create);
TaskRouter.put("/task/:id", TaskController.update);
TaskRouter.delete("/task/:id", TaskController.remove);
TaskRouter.get("/task/:id", TaskController.show);
TaskRouter.get("/tasks", TaskController.list);

export { TaskRouter };
