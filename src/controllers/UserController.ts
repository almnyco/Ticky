import ListUsersService from "../services/UserServices/ListUsersService";
import ShowUserService from "../services/UserServices/ShowUserService";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const userData = req.body;

  if (!userData?.email)
    return res.status(400).json({ error: "Invalid user e-mail" });

  const user = await ShowUserService({
    where: { email: userData.email },
  });

  if (user)
    return res
      .status(409)
      .json({ error: "There is already a user with this email." });

  return res.status(200).json(user);
};

const update = async (req: Request, res: Response) => {
  const id = req.body.id;

  if (!id) return res.status(400).json({ error: "Invalid user ID" });

  const user = await ShowUserService(id);

  console.log(user);

  return res.status(200).json();
};

const show = async (req: Request, res: Response) => {
  const id = req.body.id;

  if (!id) return res.status(400).json({ error: "Invalid user ID" });

  const user = await ShowUserService(id);

  console.log(user);

  return res.status(200).json();
};

const list = async (req: Request, res: Response) => {
  const users = await ListUsersService();

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
