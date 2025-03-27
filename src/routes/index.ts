import AuthMiddleware from "@/middlewares/AuthMiddleware";
import { AuthRouter } from "./AuthRoutes";
import { UserRouter } from "./UserRoutes";
import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  res.send("OK!");
});

router.use("/api", AuthRouter);
router.use("/api", AuthMiddleware, UserRouter);

// router.post("/signin", (req, res) => {
//     const { name, password } = req.body;

//     const user = users.find((u) => u.name === name && u.password === password);

//     if (!user) res.status(401).json({ error: "Usuário e/ou senha inválido!" });

//     const jwt_token = jwt.sign(
//         { id: user?.id, name: user?.name, role: user?.role },
//         SECRET_KEY,
//         { expiresIn: "1h" },
//     );

//     res.status(200).json({ token: jwt_token });
// });

// Authenticated route
// router.get("/protected", handler, (req, res) => {
//     res.status(200).json({ message: "Authenticated!" });
// });

// // Authenticated and private route
// router.get("/privated", handler, (req, res) => {
//     if (req.userData.role)
//         res.status(403).json({
//             error: "Você não tem permissão para acessar este recurso",
//         });

//     res.status(200).json({ message: "Authenticated!" });
// });

export { router };
