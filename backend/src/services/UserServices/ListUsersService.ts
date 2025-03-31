import { DEFAULT_USER_ATTR } from "./ShowUserService";
import UserModel from "../../database/models/user";
import { FindOptions, WhereOptions } from "sequelize";

type Params = {
  where?: WhereOptions;
  attr?: string[];
};

async function ListUsersService({
  where = {},
  attr = DEFAULT_USER_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const users = await UserModel.findAll(options);

    if (!users) return;

    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
  }
}

export default ListUsersService;
