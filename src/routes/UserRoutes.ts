import UserController from "@/controllers/UserController";
// import ApiHandler from "@/middlewares/ApiHandler";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/user", UserController.create);
UserRouter.put("/user", UserController.update);
UserRouter.delete("/user", UserController.remove);
UserRouter.get("/user", UserController.show);
UserRouter.get("/users", UserController.list);

export { UserRouter };
