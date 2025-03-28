import { DestroyOptions, WhereOptions } from "sequelize";
import UserModel from "../../database/models/user";

type Params = {
  where: WhereOptions;
};

async function RemoveUserService({ where = {} }: Params) {
  try {
    const options: DestroyOptions = { where };

    const user = await UserModel.destroy(options);

    return user;
  } catch (error) {
    console.error("Erro ao deletar usuário: ", error);
  }
}

export default RemoveUserService;
