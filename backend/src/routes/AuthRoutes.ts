import AuthController from "@/controllers/AuthController";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/signup", AuthController.signUp);
AuthRouter.post("/signin", AuthController.signIn);
AuthRouter.post("/signout", AuthController.signOut);
AuthRouter.post("/refresh", AuthController.refresh);

export { AuthRouter };
