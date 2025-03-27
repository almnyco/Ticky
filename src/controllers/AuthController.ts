import { Request, Response } from "express";
import { serializeUser } from "@/helpers/serializeUser";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import CreateUserService from "@/services/UserServices/CreateUserService";
import ShowUserService from "@/services/UserServices/ShowUserService";
import isEmail from "validator/lib/isEmail";
import { signToken } from "@/services/AuthServices.ts/AuthService";

const validate = (data, signin: boolean = false) => {
  if (!data?.email || !isEmail(data?.email)) {
    return { error: "Insert a existent and valid e-mail." };
  }

  if (signin) {
    if (!data?.password) return { error: "Insert or check your password." };

    return;
  }

  if (!data?.password || !data?.passwordRepeat) {
    return { error: "Insert or check your password." };
  }

  if (data?.password !== data?.passwordRepeat) {
    return { error: "Passwords do not match, please check and try again." };
  }
};

const signUp = async (req: Request, res: Response) => {
  const data = req.body;
  const password = req.body.password;

  const v = validate(data);
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

  const salt = await bcrypt.genSalt(11);
  const passwordHash = await bcrypt.hash(password, salt);

  user["id"] = uuidv4();
  user["password"] = passwordHash;

  const created = await CreateUserService({ data: user });

  if (!created)
    return res
      .status(400)
      .json({ error: "There is already a user with this email." });

  return res.status(200).json({ message: "Usuário criado com sucesso!" });
};

const signIn = async (req: Request, res: Response) => {
  const data = req.body;

  const v = validate(data, true);
  if (v?.error) return res.status(400).json(v);

  // Check if user exists
  const exists = await ShowUserService({
    where: { email: data.email },
    attr: ["id", "email", "password"],
  });

  if (!exists)
    return res.status(409).json({ error: "There is no user with this email." });

  // Match passwords
  const matched = await bcrypt.compare(data.password, exists.password);

  if (!matched)
    return res.status(401).json({
      error: "Invalid password, please check and try again.",
    });

  const token = signToken(exists);

  console.log(token);

  return res.status(200).json({ message: "Logged in successfully!" });
};

export default { signUp, signIn };
