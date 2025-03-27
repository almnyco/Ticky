import { FindOptions, WhereOptions } from "sequelize";
import UserModel from "../../database/models/user";

type Params = {
  where: WhereOptions;
  attr?: string[];
};

export const DEFAULT_USER_ATTR = [
  "id",
  "email",
  "firstName",
  "lastName",
  "role",
  "photo",
  "date_birth",
];

async function ShowUserService({
  where = {},
  attr = DEFAULT_USER_ATTR,
}: Params) {
  try {
    const options: FindOptions = { where, attributes: attr };

    const user = await UserModel.findOne(options);

    if (!user) return;

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
  }
}

export default ShowUserService;
