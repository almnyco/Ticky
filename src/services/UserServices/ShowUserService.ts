import { FindOptions, WhereOptions } from "sequelize";
import UserModel from "../../database/models/user";

type Params = {
  where: WhereOptions;
  attr?: string[];
};

async function ShowUserService({ where = {}, attr = [] }: Params) {
  try {
    const options: FindOptions = {};

    if (where) options["where"] = { ...where };
    if (attr?.length) options["attributes"] = attr;

    const user = await UserModel.findOne(options);

    if (!user) return;

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
  }
}

export default ShowUserService;
