import CreateUserService from "@/services/UserServices/CreateUserService";
import ShowUserService from "@/services/UserServices/ShowUserService";
import { CredentialValidation } from "@/helpers/validation";
import { serializeUser } from "@/helpers/serializeUser";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  generatePassword,
  signToken,
  verifyToken,
} from "@/services/AuthServices.ts/AuthService";
import { JWT_REFRESH_EXPIRES } from "@/constants";

const signUp = async (req: Request, res: Response) => {
  const data = req.body;
  const password = req.body.password;

  const v = CredentialValidation(data, { validatePasswordCreation: true });
  if (v?.error) return res.status(400).json(v);

  const user = serializeUser(data);

  // Check if exists an user with this email
  const exists = await ShowUserService({
    where: { email: user.email },
  });

  if (exists)
    return res
      .status(409)
      .json({ error: "There is already a user with this email." });

  const passwordHash = await generatePassword(password);
  user["password"] = passwordHash;

  const created = await CreateUserService({ data: user });

  if (!created)
    return res
      .status(400)
      .json({ error: "An error occurred while creating the user." });

  return res.status(200).json({ message: "User created successfully!" });
};

const signIn = async (req: Request, res: Response) => {
  const data = req.body;

  const v = CredentialValidation(data, { validatePassword: true });
  if (v?.error) return res.status(400).json(v);

  // Check if user exists
  const exists = await ShowUserService({
    where: { email: data.email },
    attr: ["id", "email", "role", "password", "firstName"],
  });

  if (!exists)
    return res.status(409).json({ error: "There is no user with this email." });

  // Match passwords
  const matched = await bcrypt.compare(data.password, exists.password);

  if (!matched)
    return res.status(401).json({
      error: "Invalid password, please check and try again.",
    });

  const accessToken = signToken(exists);
  const refreshToken = signToken(exists, { expiresIn: JWT_REFRESH_EXPIRES });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 60 * 60 * 1000,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  await exists.update({ accessToken: refreshToken });

  return res.status(200).json({ accessToken });
};

export const signOut = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (!token) return res.status(403).json({ error: "Refresh Token not found" });

  const verified = verifyToken({ token });

  if (verified?.error) return res.status(401).json({ error: verified?.error });

  // Check if user exists
  const exists = await ShowUserService({
    where: { accessToken: token },
    attr: ["id", "email", "role", "password", "firstName"],
  });

  if (exists) {
    await exists.update({ accessToken: null });
  }

  // Removing Token from cookies
  res.clearCookie("refreshToken");
  return res.status(200).json({ message: "Logout realizado com sucesso!" });
};

const refresh = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (!token)
    return res.status(403).json({ error: "Refresh Token not found." });

  const verified = verifyToken({ token });

  if (verified?.error) return res.status(401).json({ error: verified?.error });

  // Check if user exists
  const exists = await ShowUserService({
    where: { accessToken: token },
    attr: ["id", "email", "role", "password", "firstName"],
  });

  if (!exists) return res.status(401).json({ error: "Invalid Refresh Token." });

  const newAccessToken = signToken(exists);
  const refreshToken = signToken(exists, { expiresIn: JWT_REFRESH_EXPIRES });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 60 * 60 * 1000,
    sameSite: "lax",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });

  return res.status(200).json({ accessToken: newAccessToken });
};

export default { signUp, signIn, signOut, refresh };
