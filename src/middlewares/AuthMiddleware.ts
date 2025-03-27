import { verifyToken } from "@/services/AuthServices.ts/AuthService";
import { NextFunction, Request, Response } from "express";

// Auth middleware
const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  try {
    if (!token || typeof token !== "string" || !token?.startsWith("Bearer "))
      return res.status(401).json({ error: "Access denied!" });

    const verified = verifyToken({ token });

    if (verified?.error)
      return res.status(401).json({ error: verified?.error });

    // Setting req.data as object
    req["data"] = {
      id: verified?.id,
      name: verified?.name,
      role: verified?.role,
    };

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid Token!" });
  }
};

export default AuthMiddleware;
