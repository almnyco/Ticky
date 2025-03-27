import AuthController from "@/controllers/AuthController";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/signup", AuthController.signUp);
AuthRouter.post("/signin", AuthController.signIn);

export { AuthRouter };
