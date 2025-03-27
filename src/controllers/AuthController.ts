import CreateUserService from "@/services/UserServices/CreateUserService";
import ShowUserService from "@/services/UserServices/ShowUserService";
import { CredentialValidation } from "@/helpers/validation";
import { serializeUser } from "@/helpers/serializeUser";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  generatePassword,
  generateUserUUID,
  signToken,
} from "@/services/AuthServices.ts/AuthService";

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
  const userUUID = generateUserUUID();

  user["id"] = userUUID;
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

  return res
    .status(200)
    .json({ message: "Logged in successfully!", accessToken });
};

export default { signUp, signIn };
