import UserController from "@/controllers/UserController";
// import ApiHandler from "@/middlewares/ApiHandler";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/user", UserController.create);
UserRouter.put("/user/:id", UserController.update);
UserRouter.delete("/user/:id", UserController.remove);
UserRouter.get("/user/:id", UserController.show);
UserRouter.get("/users", UserController.list);

export { UserRouter };
