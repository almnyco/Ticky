import CreateUserService from "@/services/UserServices/CreateUserService";
import ShowUserService from "@/services/UserServices/ShowUserService";
import { CredentialValidation } from "@/helpers/validation";
import { serializeUser } from "@/helpers/serializeUser";
import { CookieOptions, Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  generatePassword,
  signToken,
  verifyToken,
} from "@/services/AuthServices/AuthService";

const cookieOptions = {
  maxAge: 1000 * 60 * 60,
  sameSite: "lax",
  httpOnly: true,
  path: "/",
  secure: process.env.NODE_ENV === "production",
} as CookieOptions;

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

  const v = CredentialValidation(data, {
    validatePassword: true,
    validateName: false,
  });
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
  const refreshToken = signToken(exists, {}, true);

  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: 1000 * 60 * 15,
  });
  res.cookie("refreshToken", refreshToken, cookieOptions);

  await exists.update({ accessToken: refreshToken });

  return res.status(200).json({ accessToken });
};

export const signOut = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  // if (!token) return res.status(403).json({ error: "Refresh Token not found" });
  if (!refreshToken) return res.sendStatus(204);

  // Check if user exists
  const exists = await ShowUserService({
    where: { accessToken: refreshToken },
    attr: ["id", "email", "role", "password", "firstName"],
  });

  if (!exists) {
    res.cookie("refreshToken", "", { maxAge: 0, httpOnly: true });
    return res.sendStatus(204);
  }

  const verified = verifyToken({ token: refreshToken }, true);

  if (verified?.error) return res.status(401).json({ error: verified?.error });

  await exists.update({ accessToken: null });

  // Removing Token from cookies
  res.cookie("accessToken", "", { maxAge: 0, httpOnly: true });
  res.cookie("refreshToken", "", { maxAge: 0, httpOnly: true });
  return res.status(200).json({ message: "Logout realizado com sucesso!" });
};

const refresh = async (req: Request, res: Response) => {
  let refreshToken = req.cookies.refreshToken;

  if (!refreshToken)
    return res.status(403).json({ error: "Refresh Token not found." });

  // Check if user exists
  const exists = await ShowUserService({
    where: { accessToken: refreshToken },
    attr: ["id", "email", "role", "password", "firstName"],
  });

  if (!exists) return res.status(401).json({ error: "Invalid Refresh Token." });

  const verified = verifyToken({ token: refreshToken }, true);
  if (verified?.error) return res.status(401).json({ error: verified?.error });

  const newAccessToken = signToken(exists);
  refreshToken = signToken(exists, {}, true);

  res.cookie("accessToken", newAccessToken, {
    ...cookieOptions,
    maxAge: 1000 * 60 * 15,
  });
  res.cookie("refreshToken", refreshToken, cookieOptions);

  return res.status(200).json({ accessToken: newAccessToken });
};

export default { signUp, signIn, signOut, refresh };
