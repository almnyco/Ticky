import CreateUserService from "@/services/UserServices/CreateUserService";
import ListUsersService from "../services/UserServices/ListUsersService";
import ShowUserService from "../services/UserServices/ShowUserService";
import { CredentialValidation } from "@/helpers/validation";
import { serializeUser } from "@/helpers/serializeUser";
import { Request, Response } from "express";
import {
  generatePassword,
  generateUserUUID,
} from "../services/AuthServices.ts/AuthService";
import UpdateUserService from "@/services/UserServices/UpdateUserService";

const create = async (req: Request, res: Response) => {
  const data = req.body;

  const v = CredentialValidation(data);
  if (v?.error) return res.status(400).json(v);

  const exists = await ShowUserService({
    where: { email: data.email },
  });

  if (exists)
    return res
      .status(409)
      .json({ error: "There is already a user with this email." });

  const user = serializeUser(data);

  const passwordHash = await generatePassword(user.password);
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

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params?.id;

  const hasPasswordUpdate = data?.password || data?.passwordRepeat;

  const v = CredentialValidation(data, {
    validatePasswordCreation: hasPasswordUpdate,
  });
  if (v?.error) return res.status(400).json(v);

  const exists = await ShowUserService({ where: { id } });

  if (!exists)
    return res.status(404).json({ error: "There is no user with this id." });

  const user = serializeUser(data);

  if (hasPasswordUpdate) {
    const newPasswordHash = await generatePassword(user.password);

    user["password"] = newPasswordHash;
  }

  const updated = await UpdateUserService({
    data: user,
    where: {
      id: exists.id,
    },
  });

  if (!updated)
    return res
      .status(400)
      .json({ error: "An error occurred while updating the user." });

  return res.status(200).json({ message: "User updated successfully!" });
};

const show = async (req: Request, res: Response) => {
  const id = req.params?.id;

  if (!id) return res.status(400).json({ error: "Invalid user ID." });

  const user = await ShowUserService({ where: { id } });

  console.log(user);

  return res.status(200).json();
};

const list = async (req: Request, res: Response) => {
  const users = await ListUsersService({});

  return res.status(200).json(users);
};

const remove = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

const UserController = {
  create,
  update,
  show,
  list,
  remove,
};

export default UserController;
